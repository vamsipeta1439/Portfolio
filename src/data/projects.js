// Selected Work data. Only verified resume/project facts are used.
const projects = [
  {
    id: 'ap-invoice-automation',
    title: 'AP Invoice Automation',
    category: 'AI • Automation • Enterprise Integration',
    tag: 'PROJECT_01',
    summary:
      'Architected an AP Invoice Automation dispatcher and performer using cloud flows and Content Understanding models, processing 50–60 invoices daily and reducing extraction errors by 40%.',
    technologies: [
      'Power Automate',
      'Azure AI / Content Understanding',
      'GPT models',
      'Oracle EBS',
      'SQL',
      'PostgreSQL',
    ],
    architecture: [
      'Email / Invoice',
      'Document Processing',
      'Content Understanding',
      'Data Extraction',
      'GPT Validation',
      'Business Validation',
      'Power Automate',
      'Oracle EBS / Database',
    ],
    results: [
      { value: '50–60', label: 'Invoices / Day' },
      { value: '40%', label: 'Fewer Extraction Errors' },
    ],
    caseStudy: {
      problem:
        'Accounts Payable invoice processing was manual and error-prone, with extraction mistakes slowing down downstream approval and posting to Oracle EBS.',
      solution:
        'Designed a dispatcher/performer automation pattern in Power Automate that routes incoming invoices through Azure AI Content Understanding for extraction, applies GPT-assisted validation, and pushes verified data into Oracle EBS.',
      challenges:
        'Handling inconsistent invoice formats reliably, and layering business validation rules on top of AI extraction so errors are caught before they reach Oracle EBS.',
      outcome:
        'The system now processes 50–60 invoices per day with a 40% reduction in extraction errors compared to the prior manual process.',
    },
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: 'nms-chargeback-automation',
    title: 'NMS Chargeback Automation',
    category: 'AI • RPA • Data Processing',
    tag: 'PROJECT_02',
    summary:
      'Automated NMS chargeback processing by extracting data from PDFs using Content Understanding models and Excel using desktop automation, then pushing processed data to Oracle EBS through backend SQL scripts.',
    technologies: [
      'Power Automate',
      'Power Automate Desktop',
      'Content Understanding',
      'Excel',
      'SQL',
      'Oracle EBS',
    ],
    architecture: ['PDF + Excel', 'Data Extraction', 'Validation / Processing', 'SQL', 'Oracle EBS'],
    results: [],
    caseStudy: {
      problem:
        'NMS chargeback data arrived across PDF documents and Excel files, requiring manual extraction and entry before it could be reconciled in Oracle EBS.',
      solution:
        'Built an automation combining Content Understanding models for PDF extraction with Power Automate Desktop for Excel-based data pulls, unifying both sources into a single processing pipeline.',
      challenges:
        'Reconciling two very different source formats (PDF and Excel) into one consistent, validated dataset before writing to Oracle EBS.',
      outcome:
        'Processed data now flows automatically into Oracle EBS through backend SQL scripts, removing manual reconciliation steps.',
    },
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: 'supplier-collaboration-dashboard',
    title: 'Supplier Collaboration Dashboard',
    category: 'React • UI Engineering • APIs',
    tag: 'PROJECT_03',
    summary:
      'Built responsive UI screens and integrated backend APIs for data dashboards in a Supplier Collaboration Lab project using React and Tailwind CSS.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs'],
    architecture: [],
    results: [],
    caseStudy: {
      problem:
        'The Supplier Collaboration Lab needed dashboard screens to surface backend data to internal and supplier-facing users.',
      solution:
        'Built responsive React UI screens styled with Tailwind CSS and integrated them with backend REST APIs to display and interact with dashboard data.',
      challenges:
        'Building a UI that stays clean and responsive while surfacing dense, API-driven dashboard data.',
      outcome:
        'Delivered working dashboard screens integrated with backend APIs as part of the Supplier Collaboration Lab project.',
    },
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: 'jobby-app',
    title: 'Jobby App',
    category: 'React • REST APIs • Authentication',
    tag: 'PROJECT_04',
    summary:
      'Built a responsive job search application featuring API-driven job listings, dynamic search, employment type and salary range filters, and user authentication.',
    technologies: ['React', 'REST APIs', 'Authentication', 'JavaScript'],
    architecture: [],
    results: [],
    caseStudy: {
      problem:
        'Job seekers need a fast way to search, filter and browse listings pulled from a live API, without a clunky or slow interface.',
      solution:
        'Built a responsive job search app with authentication, API-driven job listings, dynamic search, and filtering by employment type and salary range.',
      challenges:
        'Keeping search and filter state in sync with live API data while maintaining a fast, responsive UI.',
      outcome:
        'A fully working, publicly deployed job search application with authentication and multi-filter search.',
    },
    liveUrl: 'https://jobsforjobless.ccbp.tech/jobs',
    githubUrl: null, // no public repo
    isPublicFacing: true,
  },
];

export default projects;
