window.npm=window.npm||{};

window.npm.RedirectInterceptor = {
    version : "2.0",
    
    initialize : function(){
        this.onHandleEvent = this.onHandleEvent.bind(this);
    },

    disable : function(){
        this.enabled = false;
        this.getTargetWindow().document.removeEventListener("click",  this.onHandleEvent, false);
        this.getTargetWindow().document.removeEventListener("submit", this.onHandleEvent,  true);
    },

    enable : function(){
        this.enabled = true;
        this.getTargetWindow().document.addEventListener("click",  this.onHandleEvent, false);
        this.getTargetWindow().document.addEventListener("submit", this.onHandleEvent,  true);
    },

    setTargetWindow : function(target){
        console.log("Intercepting Live Redirects on ", target)
        this.targetWindow = target;
        console.log("target win:", this.targetWindow)
    },

    getTargetWindow : function(target){
        return this.targetWindow||window;
    },

    onHandleEvent : function(e){
        if(!this.enabled) {return}
        console.log("Blocking Redirect from", e.target)
        e.preventDefault();
        e.stopPropagation();
    }
};
window.npm.RedirectInterceptor.initialize();