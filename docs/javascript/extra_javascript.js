const { createClient } = supabase
const supabase_url = "https://liycjkfzezooeydblbba.supabase.co"
const supabase_key = "sb_publishable_MOA3h7uYACMC4icnrTuTSw_8R4Yljjb"

const _supabase = createClient(supabase_url, supabase_key);

const manifestoForm = document.getElementById("manifesto-form")
const statusMessage = document.getElementById("status-message")

function gatherResponses() {

    let formData = {}

    let data_input = document.querySelectorAll(".data-input")
    data_input.forEach(input => {
        if (input.type === 'checkbox') {
            formData[input.name] = input.checked;
        } else if (input.type === 'number') {
            formData[input.name] = input.valueAsNumber;
        } else {
            formData[input.name] = input.value;
        }
    });

    return formData
}
if (manifestoForm) {
    manifestoForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        submissionData = gatherResponses()
        
        try {
            const { data: insertedData, error } = await _supabase
            .from('signatories') // Your table name in Supabase
            .insert([submissionData]);
            
            if (error) {
                throw error;
        }

        statusMessage.textContent = 'Data submitted successfully! Thank you.';
        statusMessage.style.color = 'green';
        manifestoForm.reset(); // Clear the form after successful submission
        console.log('Inserted participant data:', insertedData);
        
        } catch (error) {
            statusMessage.textContent = `Error submitting data: ${error.message}`;
            statusMessage.style.color = 'red';
            console.error('Submission error:', error);
        }
    })
}


function toggleCheckboxes(event) {
    let tar = event.target;

    let allListNodes = tar.parentElement.nextElementSibling.children

    Array.from(allListNodes).forEach(el => el.firstElementChild.checked = tar.checked);
}

function toggleFold(state) {
    allDetails = document.querySelectorAll("details");
    Array.from(allDetails).forEach(el => el.open = state);
}