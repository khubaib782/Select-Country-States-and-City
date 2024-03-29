const data = {
  Pakistan: {
    Punjab: ["Lahore", "Rawalpindi", "Multan"],
    Sindh: ["Karachi", "Hyderabad", "Sukkur"],
    KPK: ["Peshawar", "Abbottabad", "Mardan"],
  },
  America: {
    California: ["Los Angeles", "San Francisco", "San Diego"],
    Texas: ["Houston", "Dallas", "Austin"],
    NewYork: ["New York City", "Buffalo", "Albany"],
  },
  India: {
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Delhi: ["New Delhi", "Gurgaon", "Noida"],
    Karnataka: ["Bangalore", "Mysore", "Hubli"],
  },
};

const countrySelect = document.getElementById("countrySelect");
const stateSelect = document.getElementById("stateSelect");
const citySelect = document.getElementById("citySelect");

function populateStates() {
  const selectedCountry = countrySelect.value;
  stateSelect.innerHTML = '<option value="">Select State</option>';
  citySelect.innerHTML = '<option value="">Select City</option>';

  if (selectedCountry) {
    stateSelect.disabled = false;
    Object.keys(data[selectedCountry]).forEach((state) => {
      const option = document.createElement("option");
      option.value = state;
      option.text = state;
      stateSelect.appendChild(option);
    });
  } else {
    stateSelect.disabled = true;
    citySelect.disabled = true;
  }
}

function populateCities() {
  const selectedCountry = countrySelect.value;
  const selectedState = stateSelect.value;
  citySelect.innerHTML = '<option value="">Select City</option>';

  if (selectedCountry && selectedState) {
    citySelect.disabled = false;
    data[selectedCountry][selectedState].forEach((city) => {
      const option = document.createElement("option");
      option.value = city;
      option.text = city;
      citySelect.appendChild(option);
    });
  } else {
    citySelect.disabled = true;
  }
}
