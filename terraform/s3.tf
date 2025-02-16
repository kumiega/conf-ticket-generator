resource "aws_s3_bucket" "confticket_bucket" {
  bucket = "confticket"
}

resource "aws_s3_bucket_ownership_controls" "confticket_bucket_ownership" {
  bucket = aws_s3_bucket.confticket_bucket.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "confticket_bucket_access" {
  bucket = aws_s3_bucket.confticket_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "confticket_cloudfront_acl" {
  depends_on = [
    aws_s3_bucket_ownership_controls.confticket_bucket_ownership,
    aws_s3_bucket_public_access_block.confticket_bucket_access,
  ]

  bucket = aws_s3_bucket.confticket_bucket.id
  acl    = "public-read"
}

resource "aws_s3_bucket_policy" "confticket_bucket_policy" {
  bucket = aws_s3_bucket.confticket_bucket.id
  policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Sid" : "PublicReadGetObject",
        "Effect" : "Allow",
        "Principal" : "*",
        "Action" : "s3:GetObject",
        "Resource" : "arn:aws:s3:::confticket/*"
      }
    ]
  })
}

resource "aws_s3_bucket_website_configuration" "example_website_configuration" {
  bucket = aws_s3_bucket.confticket_bucket.id

  index_document {
    suffix = "index.html"
  }
}
