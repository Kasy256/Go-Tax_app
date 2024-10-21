function pageloader(){
    alert("Welcome to Global Tax Calculator");
}

function formatMoney(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Function To Display Amount With Commas In Thousands
}

function netpay() {
    const country = document.getElementById("country").value;
    const Employeesalary = parseInt(document.getElementById("salaryamount").value);
    const NSSF = document.getElementById("nssf");
    const PAYE = document.getElementById("paye");
    const NHIF = document.getElementById("nhif");
    let result = document.getElementById("results");
    let netpay, payetax, nssfValue, knssfValue, tnssfValue, nhifValue;

    // Hide NHIF paragraph initially
    NHIF.style.display = "none";


    // Calculation For Uganda
    if (country === "Uganda") {

        // Calculate Uganda NSSF
        nssfValue = 0.05 * Employeesalary;
        NSSF.textContent = "NSSF: " + formatMoney(nssfValue.toFixed()); // Display NSSF

        if (Employeesalary > 10000000) {
            payetax = (((Employeesalary - 410000) * 0.3) + ((Employeesalary - 10000000) * 0.1)+ 25000);
            netpay = Employeesalary - payetax - nssfValue;
            
        } else if (Employeesalary > 410000 && Employeesalary <= 10000000) {
            payetax = (((Employeesalary - 410000) * 0.3) + 25000);
            netpay = Employeesalary - payetax - nssfValue;
           
        } else if (Employeesalary >= 335000 && Employeesalary <= 410000) {
            payetax = (((Employeesalary - 335000) * 0.2) + 10000);
            netpay = Employeesalary - payetax - nssfValue;
           
        } else if (Employeesalary >= 235000 && Employeesalary < 335000) {
            payetax = (((Employeesalary - 335000) * 0.1) + 10000);
            netpay = Employeesalary - payetax - nssfValue;
           
        } else {
            payetax = ((Employeesalary - 235000) * 0);
            netpay = Employeesalary - payetax - nssfValue;
           
        }

        PAYE.textContent = "PAYE: " + formatMoney(payetax.toFixed()); // Display PAYE
        result.textContent = "NetPay: " + formatMoney(netpay.toFixed()); // Display NetPay
    }

    // Calculation For Kenya 
    else if (country === "Kenya") {

        // Calculate Kenya NSSF
        knssfValue = 0.06 * Employeesalary;
        NSSF.textContent = "NSSF: " + formatMoney(knssfValue.toFixed()); // Display NSSF
        
        // Calculate Kenya NHIF
        if (Employeesalary <= 5999) {
            nhifValue = 150;
        }
        else if (Employeesalary >= 6000 && Employeesalary <= 7999){
            nhifValue = 300;  
        } 
        else if (Employeesalary >= 8000 && Employeesalary <= 11999){
            nhifValue = 400;
        } 
        else if (Employeesalary >= 12000 && Employeesalary <= 14999){
            nhifValue = 500;
        } 
        else if (Employeesalary >= 15000 && Employeesalary <= 19999){
            nhifValue = 600;
        } 
        else if (Employeesalary >= 20000 && Employeesalary <= 24999){
            nhifValue = 750;
        } 
        else if (Employeesalary >= 25000 && Employeesalary <= 29999){
            nhifValue = 850;
        } 
        else if (Employeesalary >= 30000 && Employeesalary <= 34999){
            nhifValue = 900;
        } 
        else if (Employeesalary >= 35000 && Employeesalary <= 39999){
            nhifValue = 950;
        } 
        else if (Employeesalary >= 40000 && Employeesalary <= 44999){
            nhifValue = 1000;
        } 
        else if (Employeesalary >= 45000 && Employeesalary <= 49999){
            nhifValue = 1100;
        } 
        else if (Employeesalary >= 50000 && Employeesalary <= 59999){
            nhifValue = 1200;
        } 
        else if (Employeesalary >= 60000 && Employeesalary <= 69999){
            nhifValue = 1300;
        } 
        else if (Employeesalary >= 70000 && Employeesalary <= 79999){
            nhifValue = 1400;
        } 
        else if (Employeesalary >= 80000 && Employeesalary <= 89999){
            nhifValue = 1500;
        } 
        else if (Employeesalary >= 90000 && Employeesalary <= 99999){
            nhifValue = 1600;
        } 
        else nhifValue = 1700;

        NHIF.textContent = "NHIF: " + formatMoney(nhifValue.toFixed()); // Display NHIF
        NHIF.style.display = "block"; // Show NHIF paragraph

        // Calculate PAYE for Kenya
        if (Employeesalary > 32333) {
            const tax1 = 24000 * 0.1; // Tax for the first band
            const tax2 = 8333 * 0.25; // Tax for the second band
            const tax3 = (Employeesalary - 32333) * 0.3; // Tax for the third band
            payetax = tax1 + tax2 + tax3;
            netpay = Employeesalary - payetax - knssfValue - nhifValue;
            
        } else if (Employeesalary > 24000 && Employeesalary <= 32333) {
            const tax1 = 24000 * 0.1; // Tax for the first band
            const tax2 = (Employeesalary - 24000) * 0.25; // Tax for the second band
            payetax = tax1 + tax2;
            netpay = Employeesalary - payetax - knssfValue - nhifValue;
           
        } else {
            payetax = Employeesalary * 0.1;
            netpay = Employeesalary - payetax - knssfValue - nhifValue;
            
        }

        PAYE.textContent = "PAYE: " + formatMoney(payetax.toFixed()); // Display PAYE
        result.textContent = "NetPay: " + formatMoney(netpay.toFixed()); // Display NetPay
    }

    //Calculation For Tanzania
    else if(country === "Tanzania"){

        //Calculate NSSF
        tnssfValue = 0.1 * Employeesalary;
        NSSF.textContent = "NSSF: " + formatMoney(tnssfValue.toFixed());

        //Calculate PAYE
        if(Employeesalary > 1000000){
            const ttax1 = 0 * 270000;// Tax for the first band
            const ttax2 = 0.08 * 250000;// Tax for the second band
            const ttax3 = 0.2 * 240000;// Tax for the third band
            const ttax4 = 0.25 * 240000;// Tax for the fourth band
            const ttax5 = 0.3 * (Employeesalary - 1000000);// Tax for the fifth band
            payetax = ttax1 + ttax2 + ttax3 + ttax4 + ttax5;
            netpay = Employeesalary - payetax - tnssfValue;
           
        }
        else if(Employeesalary >= 760001 && Employeesalary <= 1000000){
                const ttax1 = 0 * 270000;// Tax for the first band
                const ttax2 = 0.08 * 250000;// Tax for the second band
                const ttax3 = 0.2 * 240000;// Tax for the third band
                const ttax4 = 0.25 * (Employeesalary - 240000);// Tax for the fourth band
                payetax = ttax1 + ttax2 + ttax3 + ttax4;
                netpay = Employeesalary - payetax - tnssfValue;
                
        }
        else if(Employeesalary >= 520001 && Employeesalary <= 760000){
            const ttax1 = 0 * 270000;// Tax for the first band
            const ttax2 = 0.08 * 250000;// Tax for the second band
            const ttax3 = 0.2 * (Employeesalary - 240000);// Tax for the third band
            payetax = ttax1 + ttax2 + ttax3;
            netpay = Employeesalary - payetax - tnssfValue;
            
    }
    else if(Employeesalary >= 270001 && Employeesalary <= 520000){
        const ttax1 = 0 * 270000;// Tax for the first band
        const ttax2 = 0.08 * (Employeesalary - 250000);// Tax for the second band
        payetax = ttax1 + ttax2;
        netpay = Employeesalary - payetax - tnssfValue;
        
    }
    else{
        const ttax1 = 0 * Employeesalary;// Tax for the first band
        payetax = ttax1;
        netpay = Employeesalary - tnssfValue - payetax ;
        
    }

    PAYE.textContent = "PAYE: " + formatMoney(payetax.toFixed()); // Display PAYE
    result.textContent = "NetPay: " + formatMoney(netpay.toFixed()); // Display NetPay
    }
}

// Display tax information for different countries
const taxInfo = {
    Uganda: `
        <P class="titles">Income Tax Information for Uganda</P>
        
<!--PAYE-->
<p class="taxheadings">PAYE (Pay As You Earn)</p>
<p id="info-subtitle">Personal Income Tax Rates (2024):</p>

<table>
    <thead>
        <tr>
            <th>Income Range</th>
            <th>Tax Rate and Calculation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>0 to UGX 235,000</td>
            <td>0%</td>
        </tr>
        <tr>
            <td>UGX 235,000 - UGX 335,000</td>
            <td>10% * (Taxable income - UGX 235,000)</td>
        </tr>
        <tr>
            <td>UGX 335,000 - UGX 410,000</td>
            <td>20% * (Taxable income - UGX 335,000) + UGX 10,000</td>
        </tr>
        <tr>
            <td>UGX 410,000 - UGX 10,000,000</td>
            <td>30% * (Taxable income - UGX 410,000) + UGX 25,000</td>
        </tr>
        <tr>
            <td>Above UGX 10,000,000</td>
            <td>20% * (Taxable income - UGX 410,000) + [(Taxable income - UGX 10,000,000) * 10%]</td>
        </tr>
    </tbody>
</table>
<p id="info-subtitle">Calculation:</p>
<p class="calculations">PAYE = (Gross Income - UGX 3,000,000) * Tax Rate for each bracket</p>

<!--NSSF-->
<p class="taxheadings">NSSF (National Social Security Fund)</p>
<p id="info-subtitle">Contribution Rates (2024):</p>
<p class="descriptions">Employee Contribution: 5% of gross salary<br>
    Employer Contribution: 10% of gross salary<br>
    Total Contribution: 15% of gross salary (combined)</p>
<p id="info-subtitle">Calculation:</p>
<p class="calculations">Employee NSSF Contribution = 5% of Gross Salary<br>
    Employer NSSF Contribution = 10% of Gross Salary<br>
    Total NSSF Contribution = Employee NSSF Contribution + Employer NSSF Contribution
</p>

<!--NETPAY-->
<p class="taxheadings">NET PAY</p>
<p class="calculations">NET PAY = Gross Salary - PAYE - Employee NSSF Contribution</p>
    `,
    Kenya: `
        <p class="titles">Income Tax Information for Kenya</p>

<p class="taxheadings">PAYE (Pay As You Earn)</p>
<p id="info-subtitle">Personal Income Tax Rates (2024):</p>
<p class="descriptions">Tax bands and rates vary. Check local regulations for accurate rates.</p>
<p id="info-subtitle">Calculation:</p>
<p class="calculations">PAYE = (Gross Income - Tax-Free Allowance) * Tax Rate for each bracket</p>

<p class="taxheadings">NSSF (National Social Security Fund)</p>
<p id="info-subtitle">Contribution Rates (2024):</p>
<p class="descriptions">Employee Contribution: 6% of gross salary<br>
    Employer Contribution: 6% of gross salary<br>
    Total Contribution: 12% of gross salary (combined)</p>
<p id="info-subtitle">Calculation:</p>
<p class="calculations">Employee NSSF Contribution = 6% of Gross Salary<br>
    Employer NSSF Contribution = 6% of Gross Salary<br>
    Total NSSF Contribution = Employee NSSF Contribution + Employer NSSF Contribution
</p>

<p class="taxheadings">NHIF (National Hospital Insurance Fund)</p>
<p id="info-subtitle">Contribution Rates (2024):</p>
<p class="descriptions">Rates vary based on income bands. Check local regulations for accurate rates.</p>
<p id="info-subtitle">Calculation:</p>
<p class="calculations">NHIF Contribution based on income bands.<br>
    Net PAY = Gross Salary - PAYE - NSSF - NHIF</p>
    `,
    Tanzania: `
        <p class="titles">Income Tax Information for Tanzania</p>

<!-- PAYE -->
<p class="taxheadings">PAYE (Pay As You Earn)</p>
<p id="info-subtitle">Personal Income Tax Rates (2024):</p>
<p class="descriptions">Tax bands and rates vary. Check local regulations for accurate rates.</p>
<p id="info-subtitle">Calculation:</p>
<p class="calculations">PAYE = (Gross Income - Tax-Free Allowance) * Tax Rate for each bracket</p>

<!-- NSSF -->
<p class="taxheadings">NSSF (National Social Security Fund)</p>
<p id="info-subtitle">Contribution Rates (2024):</p>
<p class="descriptions">Employee Contribution: 10% of gross salary<br>
    Employer Contribution: 10% of gross salary<br>
    Total Contribution: 20% of gross salary (combined)</p>
<p id="info-subtitle">Calculation:</p>
<p class="calculations">Employee NSSF Contribution = 10% of Gross Salary<br>
    Employer NSSF Contribution = 10% of Gross Salary<br>
    Total NSSF Contribution = Employee NSSF Contribution + Employer NSSF Contribution
</p>

<!-- NETPAY -->
<p class="taxheadings">NET PAY</p>
<p id="info-subtitle">Calculation:</p>
<p class="calculations">NET PAY = Gross Salary - PAYE - NSSF</p>
    `
};

// Function to update tax information based on selected country
function updateTaxInfo() {
    const select = document.getElementById('country');
    const taxInfoDiv = document.getElementById('taxinfo');
    const selectedCountry = select.value;

    // Update the tax information based on the selected country
    taxInfoDiv.innerHTML = taxInfo[selectedCountry] || 'No tax information available for this country.';
}

// Event listener for country selection change
document.getElementById('country').addEventListener('change', updateTaxInfo);

// Initial call to set default tax information
updateTaxInfo();
