/**
 * INSPINIA - Responsive Admin Theme
 * Copyright 2015 Webapplayers.com
 *
 */

/**
 * MainCtrl - controller
 */
function MainCtrl() {
    this.userName = 'Example user';
    this.helloText = 'Welcome in SeedProject';
    this.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.';

    console.log("span");

    $("span.pie").peity("pie", {
        fill: ['#1ab394', '#d7d7d7', '#ffffff']
    })

    // $(".line").peity("line",{
    //     fill: '#1ab394',
    //     stroke:'#169c81',
    // })

    $(".bar").peity("bar", {
        fill: ["#1ab394", "#d7d7d7"]
    })

    $(".bar_dashboard").peity("bar", {
        fill: ["#1ab394", "#d7d7d7"],
        width:100
    })

    var updatingChart = $(".line").peity("line", { fill: '#1ab394',stroke:'#169c81' })

    setInterval(function() {
        updatingChart.each(function() {
	    	var random = Math.round(Math.random() * 10);
			var values = $(this).text().split(",");
        	values.shift();
        	values.push(random);
        	console.log(values.join(","));

	        $(this)
	            .text(values.join(","))
	            .change()
        });

    }, 1000);


};


angular
    .module('victimas')
    .controller('MainCtrl', MainCtrl)