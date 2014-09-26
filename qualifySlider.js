// this is wrapped in a self-executing function to help contain scope and follow best practices
(function (window, document, $, undefined) {
	// defines QulifySlider init method
	function QualifySlider(parent, identifier) {
		return new _qualifySlider(parent, identifier);
	}
	// assign QualifySlider method to window so that it can be called directly without requiring a new.
	window.QualifySlider = QualifySlider;

	// define _qualifySlider class.
	var _qualifySlider = function (parent, identifier) {
		var id = identifier == null ? "qualifySlider" : identifier;

		// set up success and fail messages
		var successMessage = "<img src='/Style%20Library/cis/slider/qualifyCheck.png' alt='' style='float:left;margin-right:1em;width:100px;'/><h4>Good news!</h4><p>You appear to meet the eligibility requirements for the College of Business Master of Computer Information System Program.</p><p>Please <a href='mailto:CISAdvisor@business.colostate.edu'>contact us</a> to get started, or follow the steps below to begin the application process.  Questions?  Contact <a href='mailto:CISAdvisor@business.colostate.edu'>CISAdvisor@business.colostate.edu</a> or call 970 491-4612.</p>";

		var failMessage = "<img src='/Style%20Library/cis/slider/qualifyPhone.png' alt='' style='float:left;margin-right:1em;width:100px;' /><h4>Contact us!</h4><p>You may meet the eligibility requirements for the College of Business MCIS program.</p><p>We need to know more information before determining your status. Please contact us at <a href='mailto:CISAdvisor@business.colostate.edu'>CISAdvisor@business.colostate.edu</a> or 970 491-4612.</p>";

		// set up HTML template
		var htmlTemplate = "<div id='" + id + "' class='qualifySliderContainer'>" +
				"<div id='" + id + "FormContainer'>" + 
				"<div id='yoe' class='sliderRow'>" +
					"<label for='" + id + "YOE'>Years of Experience: " +
                    "<input id='" + id + "YOE' type='text' class='valueDisplay'></label>" +
					"<div class='sliderHolder'><span>0</span> <div id='" + id + "yoeSlider' class='slider'></div> <span>25</span></div>" +
				"</div>" +
				"<div id='gpa' class='sliderRow'>" +
					"<label for='" + id + "GPA'>Degree GPA: " +
                    "<input id='" + id + "GPA' type='text' class='valueDisplay'></label>" +
					"<div class='sliderHolder'><span>1.0</span> <div id='" + id + "gpaSlider' class='slider'></div> <span>4.0</span></div>" +
				"</div>" +
				"<div id='" + id + "gmatGreContainer'>" +
					"<select id='" + id + "gmatGreSelector'>" +
						"<option value='gmat' selected='true'>GMAT Score</option>" +
						"<option value='gre'>GRE Score</option>" +
					"</select>" +
					"<div id='" + id + "GmatContainer' class='sliderRow'>" +
						"<label for='" + id + "GMAT'>GMAT Score: " +
                        "<input id='" + id + "GMAT' type='text' class='valueDisplay'></label>" +
						"<div class='sliderHolder'><span>200</span> <div id='" + id + "gmatSlider' class='slider'></div> <span>800</span></div>" +
					"</div>" +
					"<div id='" + id + "GreContainer' class='hidden'>" +
						"<div id='" + id + "GreVocabContainer' class='sliderRow'>" +
							"<label for='" + id + "GREVocab'>GRE Vocabulary Score: " +
                            "<input id='" + id + "GREVocab' type='text' class='valueDisplay'></label>" +
                            "<div class='sliderHolder'><span>130</span> <div id='" + id + "greVocabSlider' class='slider'></div> <span>170</span></div>" +
						"</div>" +
						"<div id='" + id + "GreQuantContainer' class='sliderRow'>" +
							"<label for='" + id + "GREQuant'>GRE Quantitative Score: " +
                            "<input id='" + id + "GREQuant' type='text' class='valueDisplay'></label>" +
							"<div class='sliderHolder'><span>130</span> <div id='" + id + "greQuantSlider' class='slider'></div> <span>170</span></div>" +
						"</div>" +
					"</div>" +
				"</div>" +
				"<div id='" + id + "SubmitButton' class='submitButton'>submit</div>" +
				"</div>" + 
				"<div id='" + id + "ResultsContainer' class='hidden'>Results</div>" +
			"</div>";

		// write html to dom
		$(parent).html(htmlTemplate);

		// set up jquery sliders
		$("#" + id + "yoeSlider").slider({
			value: 0,
			min: 0,
			max: 25,
			step: 1,
			slide: function (event, ui) {
				$("#" + id + "YOE").val(ui.value);
			}
		});
		document.getElementById(id + "YOE").value = $("#" + id + "yoeSlider").slider("option", "value");

		$("#" + id + "gpaSlider").slider({
			value: 1.0,
			min: 1,
			max: 4,
			step: .01,
			slide: function (event, ui) {
				$("#" + id + "GPA").val(ui.value);
			}
		});
		document.getElementById(id + "GPA").value = $("#" + id + "gpaSlider").slider("option", "value");

		$("#" + id + "gmatSlider").slider({
			value: 200,
			min: 200,
			max: 800,
			step: 1,
			slide: function (event, ui) {
				$("#" + id + "GMAT").val(ui.value);
			}
		});
		document.getElementById(id + "GMAT").value = $("#" + id + "gmatSlider").slider("option", "value");

		$("#" + id + "greVocabSlider").slider({
			value: 130,
			min: 130,
			max: 170,
			step: 1,
			slide: function (event, ui) {
				$("#" + id + "GREVocab").val(ui.value);
			}
		});
		document.getElementById(id + "GREVocab").value = $("#" + id + "greVocabSlider").slider("option", "value");

		$("#" + id + "greQuantSlider").slider({
			value: 130,
			min: 130,
			max: 170,
			step: 1,
			slide: function (event, ui) {
				$("#" + id + "GREQuant").val(ui.value);
			}
		});
		document.getElementById(id + "GREQuant").value = $("#" + id + "greQuantSlider").slider("option", "value");

		// assign event handler to gmatGreSelector
		$("#" + id + "gmatGreContainer").change(handleGmatGreSelect);

		// assign event handler to button
		$("#" + id + "SubmitButton").click(handleClick);


		function handleGmatGreSelect(event, obj) {
		
			var selected = event.target.options.selectedIndex;
			switch (selected) {
				case 0:
					$("#" + id + "GmatContainer").removeClass("hidden");
					$("#" + id + "GmatContainer").addClass("visible");

					$("#" + id + "GreContainer").removeClass("visible");
					$("#" + id + "GreContainer").addClass("hidden");

					break;
				case 1:
					$("#" + id + "GreContainer").removeClass("hidden");
					$("#" + id + "GreContainer").addClass("visible");

					$("#" + id + "GmatContainer").removeClass("visible");
					$("#" + id + "GmatContainer").addClass("hidden");

					break;
			}
		}

		function handleClick() {

			$("#" + id + "FormContainer").hide();

			// calculate results
			var result = calculateResults();

			if (result) {
				$("#" + id + "ResultsContainer").html(successMessage);
			}
			else {
				$("#" + id + "ResultsContainer").html(failMessage);
			}

			$("#" + id + "ResultsContainer").show("slide");
		}

		function calculateResults() {
			// get results
			var yoe = $("#" + id + "yoeSlider").slider("option", "value");
			var gpa = $("#" + id + "gpaSlider").slider("option", "value");
			var gmat = $("#" + id + "gmatSlider").slider("option", "value");
			var greVocab = $("#" + id + "greVocabSlider").slider("option", "value");
			var greQuant = $("#" + id + "greQuantSlider").slider("option", "value");
			var gre = greVocab + greQuant;

			var useGmat = document.getElementById(id + "gmatGreSelector").options.selectedIndex == 0;
		
			if (yoe >= 5 && gpa >= 3) {
				return true;
			}

			if (useGmat && gpa >= 3 && gmat >= 510) {
				return true;
			}

			if (!useGmat && gpa >= 3 && gre >= 300) {
				return true
			}

			return false;
		}

	}

})(window, document, jQuery);