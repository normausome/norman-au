#!/bin/bash

export PATH=/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin

# Set your AWS region and repository name
AWS_REGION="us-east-2"
REPOSITORY_NAME="normanau"
LOG_FILE="/home/ubuntu/website/ecr_check.log"

aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 763831530139.dkr.ecr.us-east-2.amazonaws.com

# Function to get the latest image digest
get_latest_digest() {
    aws ecr describe-images \
        --repository-name $REPOSITORY_NAME \
        --region $AWS_REGION \
        --query 'sort_by(imageDetails,& imagePushedAt)[-1].imageDigest' \
        --output text
}

LAST_DIGEST=$(get_latest_digest)

echo "$LAST_DIGEST"

# File to store the last known digest
DIGEST_FILE="/home/ubuntu/website/last_digest.txt"

# Get the last known digest
if [ -f "$DIGEST_FILE" ]; then
    LAST_DIGEST=$(cat "$DIGEST_FILE")
else
    LAST_DIGEST=$(get_latest_digest)
    echo "$LAST_DIGEST" > "$DIGEST_FILE"
fi

# Get the current digest
CURRENT_DIGEST=$(get_latest_digest)

# Print out the result of get_latest_digest
echo "Latest image digest: $CURRENT_DIGEST"

# Compare digests
if [ "$CURRENT_DIGEST" != "$LAST_DIGEST" ]; then
    echo "New image detected at $(date)"
    echo "Previous digest: $LAST_DIGEST"
    echo "New digest: $CURRENT_DIGEST"
    echo "$CURRENT_DIGEST" > "$DIGEST_FILE"
    docker pull 763831530139.dkr.ecr.us-east-2.amazonaws.com/normanau:latest
    docker stop normanau
    docker rm normanau
    docker run -d --restart always -p 3000:3000 --name normanau 763831530139.dkr.ecr.us-east-2.amazonaws.com/normanau
else
    echo "No new images at $(date)"
    echo "Executing as user: $(whoami)"
    echo "Current digest: $CURRENT_DIGEST"
fi

# Also log the output
{
    echo "Running as user: $(whoami)"
    echo "Latest image digest: $(aws ecr describe-images \
    --repository-name $REPOSITORY_NAME \
    --region $AWS_REGION \
    --query 'sort_by(imageDetails,& imagePushedAt)[-1].imageDigest' \
    --output text)"
    echo "Check performed at $(date)"
    echo "Latest image digest: $(get_latest_digest)"
    if [ "$CURRENT_DIGEST" != "$LAST_DIGEST" ]; then
        echo "New image detected"
        echo "Previous digest: $LAST_DIGEST"
        echo "New digest: $CURRENT_DIGEST"
    else
        echo "No new images"
    fi
    echo "----------------------------------------"
} >> "$LOG_FILE"