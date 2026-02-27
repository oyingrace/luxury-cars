;; Account Settings
(define-map settings principal {email: (string-ascii 100), notifications: bool})
(define-public (update-settings (email (string-ascii 100)) (notifications bool))