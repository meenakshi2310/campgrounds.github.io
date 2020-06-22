var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data =[
    {
        name: "Cloud's Rest",
        image: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Summer camp is not only a place to have fun but also a great place to learn new things. Also, it affects the child in a lot of positive ways than you can imagine. Besides, it helps in developing many skills and talents in children and also they learn by practical knowledge rather than theoretical knowledge. Above all, summer camp teaches them some of the most important lessons in their life."
    },
    {
        name: "people around",
        image: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Summer camp is not only a place to have fun but also a great place to learn new things. Also, it affects the child in a lot of positive ways than you can imagine. Besides, it helps in developing many skills and talents in children and also they learn by practical knowledge rather than theoretical knowledge. Above all, summer camp teaches them some of the most important lessons in their life."
    },
    {
        name: "Camp fun",
        image: "https://images.unsplash.com/photo-1445308394109-4ec2920981b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Summer camp is not only a place to have fun but also a great place to learn new things. Also, it affects the child in a lot of positive ways than you can imagine. Besides, it helps in developing many skills and talents in children and also they learn by practical knowledge rather than theoretical knowledge. Above all, summer camp teaches them some of the most important lessons in their life."
    }
        
]
function seedDB(){
    //REmove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
         //add a few campgrounds
    data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
            if(err){
                console.log(err);
            } else{
                console.log("added a campground");
                //create a comment
                Comment.create({
                    text: "This place is great,I wish there was i internet",
                    author:"Homer"
                }, function(err, comment){
                    if(err){
                        console.log(err);
                    } else{
                        campground.comments.push(comment);
                        campground.save();
                        console.log("Created new comment");
                    }
                });
            }
        });
    });
    });
   
    //add few comments
}

module.exports = seedDB;