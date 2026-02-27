;; Activity Logs
(define-map logs uint {user: principal, action: (string-ascii 100), target: (string-ascii 100)})
(define-data-var log-id uint u0)
(define-public (log-activity (action (string-ascii 100)) (target (string-ascii 100)))
(let ((id (var-get log-id)))
(map-set logs id {user: tx-sender, action: action, target: target})