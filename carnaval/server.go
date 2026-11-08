package main 

import (
	"fmt"
	"net/http"
)

func main(){

	mux := http.NewServeMux()

	mux.Handle("/", http.FileServer(http.Dir("./static")))

	server := &http.Server{
		Addr: ":3006",
		Handler: mux,
	}


	fmt.Println("Servidor iniciado", server.Addr)
	server.ListenAndServe()

}


