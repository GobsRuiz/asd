{
    // Header
    function header(){
        const header = document.querySelector("#header");

        if(window.scrollY >= 50){
            header.classList.add('header--scroll')
        }

        window.addEventListener("scroll", () => {
            if(window.scrollY >= 50){
                header.classList.add('header--scroll')
            }
            else{
                header.classList.remove('header--scroll')
            }
        })
    }
    
    // Load
    window.addEventListener("load", () => {
        header()
    })
}
