import { useState } from "react";
import './DrugAllergySelect.css';

export const DrugAllergySelect = () => {
  const [selectedAllergies, setSelectedAllergies] = useState([]);

  const handleSelect = (event) => {
    const selectedValue = event.target.value;

    if (selectedAllergies.includes(selectedValue)) {
      console.log(selectedValue);
      if (selectedAllergies.length > 1) return setSelectedAllergies(selectedAllergies.filter(item => item !== selectedValue));
    }
    const selectedOptions = [];

    const select = event.target;
    const options = select.options;

    for (let i = 1; i < options.length; i++) {
      const option = options[i];

      if (option.selected) selectedOptions.push(option.value);
    }
    setSelectedAllergies([...selectedAllergies, ...selectedOptions]);
  }

  console.log(selectedAllergies);

  return (
  <div className="container">
    <label for="drugAllergy[]" id='drugAllergiesLabel'>Drug Allergies</label>
    <select
      className="select select-checkbox"
      required
      id='drugAllergies'
      value={selectedAllergies}
      onChange={handleSelect}
      multiple
      name="drugAllergy[]"
    >
      <option value="" hidden>Drug Allergies</option>
      {getDrugAllergyOptions().map((drugAllergyOption) => {
        return (
          <option key={drugAllergyOption.id} value={drugAllergyOption.id}>
            {drugAllergyOption.name}
          </option>
        );
      })}
    </select>
  </div>)
}

function getDrugAllergyOptions() {
  return [
    { name: 'Paracetamol', id: 1 },
    { name: 'Penicilin', id: 2 },
    { name: 'Bepridil', id: 3 },
    { name: 'Aspirin', id: 4 },
    { name: 'Others', id: 5 },
  ];
}