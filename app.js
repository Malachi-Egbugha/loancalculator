document.getElementById('loan-form').addEventListener('submit', function(e){
	//Hide results
	document.getElementById('results').style.display ='none';
	//show loader
	document.getElementById('loading').style.display ='block';
	setTimeout(calculateResults, 2000);
	e.preventDefault();
});
function calculateResults()
{
	const amount = document.getElementById('amount');
	const interest = document.getElementById('interest');
	const years = document.getElementById('years');
	const monthlyPayment = document.getElementById('monthly-payment');
	const totalPayment = document.getElementById('total-payment');
	const totalInterest = document.getElementById('total-interest');
	const principal = parseFloat(amount.value);
	const calculatedInterest = parseFloat(interest.value)/100;
	const calculatedPayments = parseFloat(years.value) * 12;
	//compute monthly payments
	const monthly = (principal + (principal * calculatedInterest))/calculatedPayments;
	if (isFinite(monthly)) {
		monthlyPayment.value = monthly.toFixed(2);
		totalPayment.value = (monthly * calculatedPayments).toFixed(2);
		totalInterest.value =((monthly * calculatedPayments) - principal).toFixed(2);
		//hide loader
	document.getElementById('loading').style.display ='none';
		//show result
		document.getElementById('results').style.display ='block';
	

	}
	else
	{
		showErroor('Please Check your numbers');
	}
	

}
//Show Error
function showErroor(error)
{
	//hide loader
	document.getElementById('loading').style.display ='none';
		//hide result
		document.getElementById('results').style.display ='none';
	const errorDiv = document.createElement('div');
	// Get elements
	const card = document.querySelector('.card');
	const heading = document.querySelector('.heading');
	//add class
	errorDiv.className = 'alert alert-danger';
	//create text node and append to div
	errorDiv.appendChild(document.createTextNode(error));
	//insert error above heading
	card.insertBefore(errorDiv, heading);
	setTimeout(clearError, 3000);
}
function clearError()
{
	document.querySelector('.alert').remove();
}