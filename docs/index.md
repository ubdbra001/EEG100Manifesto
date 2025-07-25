# EEG100 Manifesto {. #main-title}
Toward a deontological framework for EEG science
{. #subtitle }

<button onclick="toggleFold(true)">Unfold all</button>
<button onclick="toggleFold(false)">Fold all</button>

{%
  include-markdown 'introduction.md'
%}


---

/// html | form[id="manifesto-form"]

{%
  include-markdown 'validity.md'
%}

{%
  include-markdown 'democratization.md'
%}

{%
  include-markdown 'responsibility.md'
%}

{%
  include-markdown 'conclusion.md'
%}

## Sign the Pledge

{% 
  include 'sign-form.html'
%}


///

/// html | div[id="snackbar"]