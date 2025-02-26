## Validity and scientific integrity in times of rapidly evolving practices

Increased computational power, flexible exploration tools, and naive exploratory practices offer a mix of opportunities and challenges for the validity (soundness and reproducibility) of research. We advocate agreed-upon standard practices using open science practices and resources grounded in theoretically elaborated research.

### Research practices and reproducible science

#### 1.1. Reproducible EEG science
??? quote "Outline"
    Over the last 15 years, neuroscience has reckoned with how questionable research and publication practices inflate false positive rates and erode trust in scientific findings (Nosek et al., 2012). Community-driven efforts have highlighted specific challenges and offered some solutions (Niso, Botvinik-Nezer, et al., 2022; Niso, Krol, et al., 2022b; Pernet et al., 2020; Simmons et al., 2012), general  manifestos (Munafò et al., 2017) and pledges (see Commitment to Research Transparency). Despite the creation of national and international networks to initiate and support relevant communities (e.g. UK Reproducibility Network; ARIADNE; the Turing Way) fully reproducible science is far from being the norm in empirical science in general (Lakens et al., 2024) or EEG research in particular. 

    To make progress, the adoption of standardized protocols for data collection, processing, and statistical analysis is essential for ensuring robust, replicable findings in EEG. At the same time, keeping high standards and re-shaping publication practices—supporting non-profit and scientifically sound publishing initiatives (e.g. open access nonprofit platforms like Peer Community In), while avoiding opaque or predatory outlets—is critical to maintain the overall quality and credibility of EEG science.

!!! abstract "Pledges" 
    I commit to increasing robustness, replication, and standardization at each stage of my EEG work—from data collection to analysis to publishing results and data (see https://oreoni.github.io/):

    - I commit to pre-registering my EEG studies, using dedicated platforms (e.g. OSF, Aspredicted, ClinicalTrials) and reporting templates (Govaart et al., 2022; Paul et al., 2021) where appropriate.

    - I commit to clearly and systematically communicating all decisions made during data processing—adhering to guidelines such as COBIDAS and ARTEM-IS, recognizing that transparent reporting is critical to the integrity and interpretability of EEG research.

    - I commit to sharing the code and analysis pipelines that can straightforwardly reproduce my original results.

    - I commit to publicly releasing negative results.

    - I commit to sharing raw data, employing general purpose solutions (gin/g-node, datalad for datasets) to EEG specific tools and standards (e.g., BIDS-EEG, ARTEM-IS see Niso, Krol, et al., 2022b).

    I commit to improve systemic reproducibility: 

    - I commit to supporting initiatives focused on reproducing results from published articles (e.g. through initiatives like #EEGManyLabs, EEGManyPipelines, EEGManyAnalysts, TMS-EEG T4TE) either by participating in replication efforts or by supporting and communicating with researchers who are working to replicate my published results.

    - I commit to improving the reproducibility and robustness of my own work by testing the effects of different recording setups and analysis pipelines (e.g. through specialist scripts, for example (Es et al., 2024))  including “multiverse analysis” (Aczel et al., 2021; Del Giudice & Gangestad, 2021; Steegen et al., 2016), see example tools; boba, multiverse, multifear, multitool, comet, nipype, shiny app, Gorgolewski et al., 2011) and/or by validating findings across multiple recording devices and environments.

    - I commit to supporting non-profit, scientifically rigorous publishing initiatives, and to refrain from participating in opaque or predatory publishing practices, whether as an author, reviewer, or editor. 

    - When acting as a reviewer, I commit to requesting that (where appropriate) authors follow standard, robust and replicable research protocols and make any pre-registered hypotheses, datasets and analysis scripts publicly available during the submission process to avoid access issues post-publication

#### 1.2. Standardization and Documentation of Data
??? quote "Outline"
    Generating large, annotated, and openly accessible EEG data repositories, including clinical and neuroimaging data, is crucial for advancing both basic and applied neuroscience. By pooling resources and sharing data, we enable researchers to perform large-scale analyses that are otherwise impractical for individual laboratories. Standardising datasets, using the Brain Imaging Data Structure (BIDS), is a crucial stage that fosters FAIR science. To promote transparency, we suggest sharing not only raw data but also analysis scripts and detailed metadata. Platforms such as OpenNeuro and Zenodo can be used to facilitate this process while ensuring adherence to FAIR principles (Wilkinson et al., 2016a). Such repositories facilitate discovery science by providing diverse datasets that can help uncover new patterns, validate findings across different populations, and improve the generalizability of results. 
    
    Moreover, open data repositories are invaluable for developing and refining diagnostic applications. They provide the necessary volume and variety of data required to train machine learning algorithms and develop robust biomarkers for neurological and psychiatric conditions.

!!! abstract "Pledges" 
    - I commit to sharing curated EEG data as openly as possible (i.e. as institute agreements allow) along with detailed metadata, annotations, and tags, using well-established open repositories.
    - I commit to using the FAIR principles for sharing data (Wilkinson et al., 2016b, data should be Findable, Accessible, Interoperable, and Reusable). This facilitates discovery science, improve diagnostic applications, industry applications and educational settings, promoting learning and skill development among students and early-career researchers
    - I commit to regularly update and enhance my shared data based on user feedback.

#### 1.3. Open Source
??? quote "Outline"
    EEG data requires elaborate software to perform more and more complex analyses. Open-Source (OS) software and hardware have become vital components in advancing EEG research. By supporting and contributing to Free and Open-Source Software (FOSS) and Open-Source Hardware (OSH), we encourage transparency, collaboration, and innovation within the community. Open-Source tools allow researchers to inspect, modify, and improve code and designs, leading to more robust and reliable scientific instruments and analyses. At the same time, OS fosters the development and sharing of cutting-edge methods and makes it easy to attribute developers for their contributions. This collective effort enhances the reproducibility of our work, accelerates scientific progress, and promotes a culture of openness and mutual support in the EEG community. Furthermore, open-source initiatives lower barriers to entry for researchers worldwide, especially those in resource-limited settings. By making software and hardware freely available, we democratize access to cutting-edge tools, promoting inclusivity and diversity in EEG science (also see Democratization section below).
    
    At the same time, high standards and best practice in developing and using OS scientific software must be maintained to harvest its full potential (see Westner et al.)

!!! abstract "Pledges"
    - I commit to integrating open-source tools, data management practices, and transparent workflows into my research whenever possible.
    - I pledge to cite open-source software properly, including specific version tags or DOIs, to 1) give full credit to all developers’ contributions and 2) enable full replication of analysis pipelines.
    - I commit to following best practices in software use—such as version control, clear documentation, and code review—to enhance reliability and reproducibility.
    - For code and tools that I develop, I commit to using open licenses (e.g., BSD, MIT, GPL), creating readable documentation, and publishing my code on accessible platforms (e.g., GitHub, GitLab, OSF).
    - When I benefit from others’ tools, I commit to contributing back if I have the skills or resources—whether through bug reports, testing, documentation, tutorials, or feature development.
    - I recognize and value software development as a genuine scientific contribution; where possible, I will encourage formal acknowledgment of developers’ work (e.g., in publications and grants).
    - I commit to promoting open-source solutions in my institution, professional networks, and collaborations by highlighting their benefits for transparency, reproducibility, and inclusivity.
    - I will encourage administrators, funding bodies, and reviewers to recognize and reward open-science practices and open-source development as key indicators of scientific excellence.
    - Where relevant, I will support and mentor colleagues or trainees in adopting open-source tools and methods, lowering barriers to entry for all researchers—including those in resource-limited settings.

### Interpretable and theoretically well-grounded research

#### 1.4. Theory-driven and data-driven research: 
??? quote "Outline"
    Recent years have seen an increasing emphasis on ever-larger datasets with insufficient attention to the theoretical underpinnings that might explain brain activity and its emergent properties (Borsboom et al., 2021; Eronen & Bringmann, 2021) that might explain brain activity and its emerging properties (Gerstner et al. 2012). 

    From a philosophical or epistemological standpoint, it is vital to recognize the limits of any single perspective. A purely data-driven understanding of neuroscience—particularly one focused on individual-brain analysis—can be limited in scope (Forest 2016). We therefore advocate for cultivating strong theoretical neuroscience foundations and for interdisciplinary exchanges that draw insights from fields such as philosophy, anthropology, psychology, the arts, and the humanities. These cross-pollinations could yield innovative frameworks that enrich our interpretations of EEG data.
    
    In addition, the considerations outlined here link closely with our broader calls for epistemological rigor (see also Section 3.2). Effective science requires not just the “how” of sound methods and robust protocols, but also the “why”: the political, social, and ethical relevance behind our research questions.

    By grounding EEG research in a well-articulated theoretical framework and seeking contributions from diverse disciplines, we can enhance the explanatory power of our findings, enrich interpretation, and promote more meaningful progress in understanding the human brain.

!!! abstract "Pledges"
    - I support engaging in the development of strong preliminary theoretical reflections on the neurophysiological basis of the expected EEG results 
    - I will refrain from using theory-blind approaches to scientific investigation prone to questionable research practices—especially those consuming large computational resources—without a prior theoretical rationale (cf. pledges 3.4 on environmental responsibility)
    - I recognize that reading synthesis texts from other disciplines (e.g., philosophy, anthropology, history, political science) is a worthwhile investment, helping align my research objectives with societal realities.
    - I commit to embracing diverse perspectives e.g. integrating insights from the arts and humanities into my research and actively collaborating in interdisciplinary teams and consortia to foster innovation, cross-pollination of ideas, and a deeper theoretical grounding for EEG science.
    - I commit to training students to engage with theoretical reflections involving interdisciplinary approaches

#### 1.5. Transparent, interpretable, and explainable modeling: 
??? quote "Outline"
    A key challenge emerging for complex computational models—particularly those applied to data analysis and clinical decision-making—is ensuring their transparency, interpretability, and explainability. Modern AI architectures often surpass our theoretical grasp (Holzinger et al., 2022), creating an epistemic gap where we rely on tools we cannot fully comprehend (Cichy & Kaiser, 2019). To address this, the EEG community must dedicate basic research and advanced computational tools (see the Local Interpretable Model-Agnostic or LIME approach as one such framework (Ribeiro et al., 2016)) to uncovering how these models operate, while simultaneously leveraging their potential to advance knowledge and applications.
    
    Fostering interpretability and explainability requires both a solid theoretical foundation and active collaboration across disciplines. The application of cross-validation with independent and diverse datasets will help mitigate overfitting and bias, increasing the likelihood that conclusions drawn from AI models are reliable. By openly sharing parameters, feature-selection methods, and decision-making processes, we can build stronger trust within our community and accelerate meaningful progress in AI-driven EEG research.

!!! abstract "Pledges"
    - I support the development of more transparent, explainable, and interoperable computational models and tools (e.g., LIME), including the use of independent databases for cross-validation.
    - I commit to publicly disclosing AI scripts and documenting all relevant decisions in my model designs—including feature-selection methods, parameter settings, and validation steps—to foster transparency and interpretability in AI-driven neuroscience.
    - I commit to promoting best practices for AI transparency when training students and early career researchers, reviewing grants and evaluating manuscripts.
