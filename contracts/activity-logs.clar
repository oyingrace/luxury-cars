;; Activity Logs
(define-map logs uint {user: principal, action: (string-ascii 100), target: (string-ascii 100)})