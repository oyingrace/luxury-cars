;; Access Tokens
(define-map tokens (string-ascii 50) {owner: principal, valid: bool})
(define-public (create-token (token (string-ascii 50)))