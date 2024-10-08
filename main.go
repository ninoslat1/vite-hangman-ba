package main

import (
        "fmt"
        "net/http"
        "os"
)

func main() {
        http.Handle("/", http.FileServer(http.Dir("./dist")))

        port := os.Getenv("PORT")
        if port == "" {
                port = "5000" // Default port jika tidak ada yang di-set
        }

        fmt.Printf("Server listening on port %s\n", port)
        err := http.ListenAndServe(":"+port, nil)
        if err != nil {
                panic(err)
        }
}