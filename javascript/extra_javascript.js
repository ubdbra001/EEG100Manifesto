const { createClient } = supabase
const supabase_url = "https://liycjkfzezooeydblbba.supabase.co"
const supabase_key = "sb_publishable_MOA3h7uYACMC4icnrTuTSw_8R4Yljjb"

const _supabase = createClient(supabase_url, supabase_key);

const stableContainer = document.body

function showSnackbar(message, type = "success", autohideDuration = 3000){

    const snackbar = document.getElementById('snackbar');
    if (!snackbar) {
        console.error("Snackbar element not found!");
        return;
    }
    snackbar.textContent = message;

    snackbar.classList.remove('show', 'success', 'error'); // Remove all dynamic classes first
    
    snackbar.classList.add('show');
    
    snackbar.classList.add(type);

    clearTimeout(snackbar.timeoutId);
    snackbar.timeoutId = setTimeout(() => {
        snackbar.classList.remove('show');
    }, autohideDuration);
}

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

if (stableContainer) {
    stableContainer.addEventListener('submit', async (event) => {

        const targetForm = event.target.closest('#manifesto-form');

        if (targetForm) {
            event.preventDefault();
            
            const submitButton = targetForm.querySelector('#sign-button');
            if (submitButton) {
                var originalSubmitValue = submitButton.value;
                submitButton.disabled = true; // Disable to prevent double submission
                submitButton.value = 'Submitting...'; // User feedback
            }

            const submissionData = gatherResponses(); // Call your existing function

            console.log("Data collected: ", submissionData)

            try {
                // Insert data into Supabase
                // Supabase's 'insert' method expects an array of objects, even for a single row.
                const { data: insertedData, error } = await _supabase
                    .from('signatories') // Your table name in Supabase
                    .insert([submissionData]);

                if (error) {
                    throw error; // Throw error to be caught by the catch block
                }

                // --- Success Actions ---
                showSnackbar('Data submitted successfully! Thank you.');
                console.log('Inserted participant data:', insertedData);

                targetForm.reset(); // Reset the form fields
                // Scroll to the top of the page (or your desired 'start' element)
                window.scrollTo({ top: 0, behavior: 'auto' }); // Scrolls to absolute top
                // OR: document.getElementById('form-title').scrollIntoView({ behavior: 'smooth' }); // Scrolls to a specific element

            } catch (error) {
                // --- Error Actions ---
                showSnackbar(`Error submitting data: ${error.message}`, 'error', 10000); // Keep error toast visible (autoHide=false)
                console.error('Submission error:', error);
            } finally {
                // This block always runs, whether try or catch was executed
                if (submitButton) {
                    submitButton.disabled = false; // Re-enable the button
                    submitButton.value = originalSubmitValue; // Reset button text
                }
            }
        }
    })
} else {
    console.error("Error: Stable parent container for form submission not found! Check 'app-container' ID.");
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