AFRAME.registerComponent("markerHandler", {
    init: async function() {
        this.el.addEventListener("markerFound", () => { 
            console.log("marker is found") 
            this.handleMarkerFound(); 
        });

        this.el.addEventListener("markerLost", () => { 
            console.log("marker is lost") 
            this.handleMarkerLost(); 
        });
    },

    handleMarkerFound: function() {
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "flex";

        var summaryButton =  document.getElementById("order-summary");
        var orderButton =  document.getElementById("order-button");

        summaryButton.addEventListener("click", () => {
            swal({
                icon: "warning",
                title: "Order Summary",
                text: "Work in progress..."
            })
        })

        orderButton.addEventListener("click", () => {
            swal({
                icon: "https://i.imgur.com/4NZ6uLY.jpg",
                title: "Thanks For Ordering!",
                text: "Your order will soon arrive..."
            })
        })
    },

    handleMarkerLost: function() {
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none";
    }

  });
  
  