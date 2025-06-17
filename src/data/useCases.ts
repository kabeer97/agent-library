
import { UseCase } from '@/types/useCase';

export const useCases: UseCase[] = [
  {
    id: '1',
    title: 'Ticket Creation & Submission',
    description: 'Agentic AI enables users to easily initiate and submit support requests across multiple channels such as chat, email, and web portals. By leveraging AI to understand user intent and capture relevant context, the process becomes faster and more accurate. The system ensures tickets are properly categorized and routed to the appropriate teams, reducing manual effort and accelerating issue resolution while enhancing the overall support experience.',
    domain: 'IT',
    integrations: 'ServiceNow, Jira Service Management, BMC Remedy, Microsoft Teams, Slack, Outlook, Gmail, Salesforce Experience Cloud, Zendesk Guide, Zapier, Workato, Microsoft Power Automate',
    keyBenefits: '1. Smart, Guided Ticket Creation\nAgentic AI proactively helps users complete tickets accurately with minimal effort.\n2. Automated Categorization & Routing\nIssues are instantly classified and routed to the right support team.\n3. Seamless Multi-Channel Support\nUsers can submit tickets via chat, email, or voice—with context preserved.\n4. Effortless Follow-Up & Updates\nAI handles status updates and missing info without human intervention.'
  },
  {
    id: '2',
    title: 'Ticket Viewing & Tracking',
    description: 'Allows users to view the status of their submitted tickets and track progress in real-time across channels. The system provides updates on ticket assignment, resolution stages, and expected timelines, enabling better visibility and reducing the need for follow-ups. This improves user confidence in the support process and keeps them informed throughout the resolution lifecycle.',
    domain: 'IT',
    integrations: 'ServiceNow, Jira Service Management, BMC Remedy, Microsoft Teams, Slack, Outlook, Gmail, Salesforce Experience Cloud, Zendesk Guide, Zapier, Workato, Microsoft Power Automate',
    keyBenefits: '1. Real-Time Status Visibility\nUsers get instant access to ticket progress without needing to contact support.\n2. Unified Ticket History\nAll past and active tickets are accessible in one place across channels.\n3. Proactive Updates & Alerts\nAgentic AI can notify users of changes or request actions when needed.\n4. Reduced Support Workload\nFewer status-related inquiries free up agents for higher-value tasks.'
  },
  {
    id: '3',
    title: 'Ticket Interaction & Updates',
    description: 'Enables users to engage with ongoing support tickets by providing additional context, responding to technician queries, or uploading relevant files. AI ensures smooth back-and-forth communication and automatically updates ticket logs. This leads to faster resolution, reduced confusion, and a more collaborative support experience.',
    domain: 'IT',
    integrations: 'ServiceNow, Jira Service Management, BMC Remedy, Microsoft Teams, Slack, Outlook, Gmail, Salesforce Experience Cloud, Zendesk Guide, Zapier, Workato, Microsoft Power Automate',
    keyBenefits: '1. Easy Ticket Updates\nUsers can modify tickets or add info without restarting the process.\n2. Instant Comment Syncing\nUpdates are reflected in real time across channels.\n3. Attachment & Detail Handling\nAI prompts for necessary files or data to aid resolution.\n4. Lower Agent Interruption\nFewer manual updates needed from support staff.'
  },
  {
    id: '4',
    title: 'Ticket Escalation & Closure',
    description: 'Automates the escalation of unresolved tickets based on pre-set rules or user requests, ensuring timely attention from higher-tier support teams. Users can also confirm issue resolution and close tickets directly. This improves SLA adherence, reduces ticket backlog, and streamlines the full lifecycle of support.',
    domain: 'IT',
    integrations: 'ServiceNow, Jira Service Management, BMC Remedy, Microsoft Teams, Slack, Outlook, Gmail, Salesforce Experience Cloud, Zendesk Guide, Zapier, Workato, Microsoft Power Automate',
    keyBenefits: '1. AI-Driven Escalation Rules\nAgentic AI escalates based on urgency, SLA, or user signals.\n2. User-Led Closure\nUsers can close resolved tickets directly through the bot.\n3. Feedback Collection Built-In\nAI prompts for feedback or survey at ticket close.\n4. Prevents SLA Violations\nTimely escalation reduces resolution delays.'
  },
  {
    id: '5',
    title: 'Approval Management',
    description: 'Manages the end-to-end workflow for requests requiring managerial or policy-based approval, such as software access or hardware procurement. The system notifies approvers, tracks status, and updates users automatically. This ensures compliance while speeding up decisions and minimizing delays in provisioning.',
    domain: 'IT',
    integrations: 'ServiceNow Flow Designer, Jira Automation, Microsoft Power Automate, Slack, Microsoft Teams, Outlook, Okta, Azure AD, Ping Identity, DocuSign, Adobe Sign',
    keyBenefits: '1. Automated Approval Routing\nRequests are sent to the right approvers with no delays.\n2. Multi-Level Approval Support\nHandles complex, sequential approval workflows efficiently.\n3. Real-Time Status Updates\nUsers and approvers receive live alerts and reminders.\n4. Reduced Processing Delays\nAI ensures faster turnaround on requests.'
  },
  {
    id: '6',
    title: 'Login Troubleshooting',
    description: 'Helps users diagnose and resolve login issues using intelligent prompts and system checks. It guides users through steps like password resets, session verification, and lockout resolution. By automating common fixes and escalating when necessary, the system reduces downtime and improves user productivity.',
    domain: 'IT',
    integrations: 'Okta, Azure AD, Google Workspace, Splunk, IBM QRadar, Sumo Logic, ServiceNow, Freshservice, Zendesk, Microsoft Teams, Slack, Intercom',
    keyBenefits: '1. Instant Issue Detection\nAI quickly identifies root causes of login failures.\n2. Cross-System Compatibility\nHandles login problems across multiple platforms.\n3. Proactive User Prompts\nGuides users step-by-step to resolution.\n4. Reduced Helpdesk Load\nDeflects repetitive login issues from IT teams.'
  },
  {
    id: '7',
    title: 'Password Management',
    description: 'Assists users with password-related issues such as reset, expiration, and complexity requirements. AI handles identity verification and initiates secure resets through the appropriate channels. This ensures a fast, secure, and compliant way to manage user credentials while reducing help desk load.',
    domain: 'IT',
    integrations: 'Okta, OneLogin, Azure AD, LastPass, Keeper, 1Password, Microsoft Active Directory, LDAP, ServiceNow, Jira Service Management',
    keyBenefits: '1. 24/7 Password Reset Support\nAI enables self-service recovery anytime.\n2. Unified Credential Handling\nManages passwords across multiple systems.\n3. Secure Identity Verification\nBuilt-in checks protect against misuse.\n4. Reduced Wait Times\nFaster resolutions than traditional support.'
  },
  {
    id: '8',
    title: 'Username Recovery',
    description: 'Allows users to retrieve forgotten usernames by verifying identity through secure channels. AI guides the process in a user-friendly way, reducing frustration and wait times. This functionality improves access continuity and minimizes disruptions to user workflows.',
    domain: 'IT',
    integrations: 'Okta, Ping Identity, Azure AD, Outlook, Gmail, ServiceNow, Freshdesk, Zendesk, Salesforce, HubSpot',
    keyBenefits: '1. Seamless Identity Retrieval\nAI helps users retrieve forgotten usernames easily.\n2. Secure, Guided Flow\nEnsures authentication before revealing sensitive info.\n3. System-Agnostic Recovery\nWorks across multiple apps and domains.\n4. Cuts Down IT Requests\nMinimizes low-complexity tickets for agents.'
  },
  {
    id: '9',
    title: 'Multi-Factor Authentication',
    description: 'Supports users with setup, usage, and troubleshooting of multi-factor authentication (MFA) methods. The system can guide users through configuring devices, responding to MFA prompts, or resolving issues with token delivery, improving account security and access reliability.',
    domain: 'IT',
    integrations: 'Duo Security, Okta Verify, Microsoft Authenticator, Azure AD, Ping Identity, ForgeRock, ServiceNow, Freshservice, Slack, Teams, SMS gateways (e.g., Twilio)',
    keyBenefits: '1. Smooth MFA Onboarding\nGuides users through setup with no confusion.\n2. Real-Time Troubleshooting\nFixes enrollment or token issues instantly.\n3. Secure Bypass Support\nHandles temporary access needs safely.\n4. Reduced MFA-Related Tickets\nFrees IT from common MFA issues.'
  },
  {
    id: '10',
    title: 'Software Access & Licensing',
    description: 'Automates the process of requesting, reviewing, and provisioning software access and licenses. AI validates eligibility, routes approvals, and tracks usage compliance. This ensures efficient software distribution, cost control, and adherence to licensing policies.',
    domain: 'IT',
    integrations: 'Flexera, Snow Software, ServiceNow SAM, ServiceNow, Jira Service Management, Okta, Azure AD,  Microsoft Power Automate, Workday',
    keyBenefits: '1. On-Demand Access Requests\nUsers can request software instantly via AI.\n2. License Availability Checks\nAI verifies license pool before routing.\n3. Automated Approval Handling\nSends requests through correct workflows.\n4. Audit-Ready Tracking\nMaintains logs of all access activity.'
  },
  {
    id: '11',
    title: 'Device Replacement & Repair',
    description: 'Enables users to report hardware issues, request replacements, or schedule repairs with minimal friction. AI gathers necessary information upfront, routes the request correctly, and provides users with updates on fulfillment status, enhancing hardware support operations.',
    domain: 'IT',
    integrations: 'ServiceNow HAM, Lansweeper, Ivanti, Freshservice, Zendesk, BMC Helix, Slack, Teams, Email, FedEx, UPS APIs',
    keyBenefits: '1. Fast Issue Triage\nAI gathers details to assess repair needs upfront.\n2. Streamlined Replacement Flows\nGuides users through device exchange steps.\n3. Vendor & Ticket Integration\nConnects with repair teams and logistics.\n4. Minimizes User Downtime\nSpeeds up resolution to keep users productive.'
  },
  {
    id: '12',
    title: 'Computer Troubleshooting',
    description: 'Assists users with diagnosing and resolving issues on their desktops or laptops, such as slow performance, system crashes, or application errors. AI provides step-by-step troubleshooting or creates a detailed ticket for IT if manual intervention is needed, reducing downtime.',
    domain: 'IT',
    integrations: 'TeamViewer, AnyDesk, LogMeIn, Datadog, Splunk, Microsoft Endpoint Manager, ServiceNow, Jira, MS Teams, Slack',
    keyBenefits: '1. Automated Diagnostics\nIdentifies and resolves common PC issues quickly.\n2. Guided User Resolutions\nStep-by-step instructions reduce tech confusion.\n3. Hardware & Software Support\nHandles both physical and OS-related problems.\n4. Reduces IT Overload\nFrees support staff from basic troubleshooting.'
  },
  {
    id: '13',
    title: 'Printer & Scanner Support',
    description: 'Guides users through common troubleshooting steps for printer and scanner issues, including connectivity problems, driver updates, and paper jams. If unresolved, the system can escalate or schedule technician support. This reduces delays and improves access to office equipment.',
    domain: 'IT',
    integrations: 'HP Web Jetadmin, Xerox CentreWare, Freshservice, ServiceNow, Cisco Prime, SolarWinds, Confluence, Guru',
    keyBenefits: '1. Instant Device Discovery\nAI locates and configures nearby devices.\n2. Connectivity Issue Detection\nQuickly troubleshoots network and driver issues.\n3. Usage Instructions Included\nHelps users with common printer tasks.\n4. Reduced Manual IT Help\nFewer tickets for routine printing issues.'
  },
  {
    id: '14',
    title: 'Mobile Device Management',
    description: 'Supports mobile device setup, policy enforcement, app installation, and troubleshooting for both BYOD and company-owned devices. AI ensures compliance with security protocols and provides guided support for issues such as connectivity, sync problems, or lost devices.',
    domain: 'IT',
    integrations: 'Intune, AirWatch (VMware), Jamf, Azure AD, Okta, ServiceNow, Ivanti, Microsoft Defender, Lookout',
    keyBenefits: '1. Streamlined Device Enrollment\nEases onboarding of personal and corporate devices.\n2. Platform-Agnostic Support\nWorks across iOS, Android, and others.\n3. Security Compliance Prompts\nGuides users to meet device security standards.\n4. Reduces Device Setup Time\nFaster configuration, less back-and-forth with IT.'
  },
  {
    id: '15',
    title: 'VPN Support',
    description: 'Assists users with VPN access setup, troubleshooting, and credential issues to ensure secure remote connectivity. The system handles common errors and escalates network-related concerns, enabling seamless and secure access to internal resources from anywhere.',
    domain: 'IT',
    integrations: 'Cisco AnyConnect, Palo Alto GlobalProtect, Fortinet, Okta, Azure AD, Splunk, Datadog, ServiceNow, Jira',
    keyBenefits: '1. Guided VPN Setup\nUsers get step-by-step install instructions.\n2. Secure Access Validation\nConfirms credentials and access permissions.\n3. Instant Connectivity Checks\nDetects and resolves VPN errors quickly.\n4. Reduces Remote Downtime\nEnsures users stay connected from anywhere.'
  },
  {
    id: '16',
    title: 'Network Connectivity',
    description: 'Helps users resolve network issues such as internet outages, slow speeds, or Wi-Fi disconnections. AI guides basic troubleshooting steps and can interface with monitoring tools to detect outages or degraded performance, enabling quicker restoration of connectivity.',
    domain: 'IT',
    integrations: 'Nagios, SolarWinds, ThousandEyes, PagerDuty, Opsgenie, Cisco, Juniper, ServiceNow, Freshservice',
    keyBenefits: '1. Live Connectivity Testing\nChecks for outages or weak signals.\n2. Smart Troubleshooting Prompts\nWalks users through tailored solutions.\n3. Multi-Environment Coverage\nWorks at home, office, or hybrid setups.\n4. Shortens Network Downtime\nQuick resolution improves productivity.'
  },
  {
    id: '17',
    title: 'File Sharing & Network Drives',
    description: 'Supports access to shared folders, drive mappings, and file permission management. AI can guide users through connecting to network resources, troubleshoot access errors, and coordinate with admins when additional access or configuration is required.',
    domain: 'IT',
    integrations: 'OneDrive, Google Drive, SharePoint, AD, LDAP, Okta, Azure AD, Jira Service Management, ServiceNow',
    keyBenefits: '1. Secure Access Granting\nAI handles permission requests safely.\n2. Real-Time Access Status\nLets users know if they have access or not.\n3. Supports Mapping & Syncing\nHelps users mount drives and troubleshoot syncs.\n4. Reduces IT Dependency\nFewer tickets for basic access issues.'
  },
  {
    id: '18',
    title: 'Virtual Desktop Support',
    description: 'Provides assistance with accessing and troubleshooting virtual desktop infrastructure (VDI), including login errors, session issues, and performance problems. AI helps identify common root causes and escalates to backend teams when needed for faster resolution.',
    domain: 'IT',
    integrations: 'Citrix, VMware Horizon, Amazon WorkSpaces, Okta, Azure AD, Splunk, ControlUp, ServiceNow, Freshservice',
    keyBenefits: '1. Fast VDI Access Setup\nWalks users through environment configuration.\n2. Performance Issue Detection\nIdentifies lag, crashes, or connectivity problems.\n3. Cross-System Compatibility Help\nSupports various virtual desktop platforms.\n4. Improves Remote Experience\nEnsures users can work without friction.'
  },
  {
    id: '19',
    title: 'Email Management',
    description: 'Helps users configure, troubleshoot, and manage email accounts, including settings, access permissions, and distribution rules. The system automates common fixes and flags potential issues for IT review, ensuring reliable and secure communication.',
    domain: 'IT',
    integrations: 'Microsoft 365, Gmail, Exchange, Azure AD, Okta, Proofpoint, Mimecast, ServiceNow, Jira',
    keyBenefits: '1. Automated Email Setup\nGuides users through account configuration.\n2. Troubleshooting Made Simple\nFixes sync and send/receive issues fast.\n3. Permission & Access Requests\nHandles mailbox delegation or shared inbox needs.\n4. Lowers Email-Related Tickets\nDeflects routine support inquiries from agents.'
  },
  {
    id: '20',
    title: 'Video Conferencing',
    description: 'Assists users with setup, troubleshooting, and usage of video conferencing tools like Zoom, Teams, or Webex. AI can resolve issues with connectivity, permissions, or device compatibility, ensuring smooth virtual meetings and collaboration.',
    domain: 'IT',
    integrations: 'Zoom, Microsoft Teams, Google Meet, WebEx, Google Calendar, Outlook, Okta, Azure AD, ServiceNow, ThousandEyes',
    keyBenefits: '1. Quick Meeting Setup\nHelps users schedule or join meetings easily.\n2. Tool-Specific Support\nGuides troubleshooting for Zoom, Teams, etc.\n3. Audio/Video Diagnostics\nFixes camera, mic, and speaker issues.\n4. Ensures Meeting Continuity\nReduces disruptions during critical calls.'
  },
  {
    id: '21',
    title: 'Leave Request Management',
    description: 'Agentic AI streamlines the process of managing employee leave requests by automating submission, approval, and tracking workflows. It acts proactively by guiding employees through policy-compliant request submissions, alerting managers to pending approvals, and updating relevant systems like calendars and HR tools—without the need for manual intervention.',
    domain: 'HR',
    integrations: 'Workday, SAP SuccessFactors, BambooHR, ADP, UKG, Microsoft Outlook, Google Calendar, Slack, Microsoft Teams',
    keyBenefits: '1. Faster Processing Automates\nAutomates approvals and notifications, reducing wait times.\n2. Policy Compliance\nEnsures leave requests align with company rules and available balances.\n3. Seamless Integration\nUpdates calendars, HR systems, and out-of-office messages in real-time.\n4. Improved Visibility\nOffers managers a clear view of team availability and leave patterns.'
  },
  {
    id: '22',
    title: 'Job Requirement Management',
    description: 'Agentic AI simplifies the creation and management of job requirements by standardizing request formats, auto-routing submissions for approvals, and ensuring alignment with organizational hiring policies. It accelerates recruitment processes by reducing back-and-forth and making it easier for hiring managers to initiate and update role requests.',
    domain: 'HR',
    integrations: 'Workday, SAP SuccessFactors, Greenhouse, Lever, iCIMS, SmartRecruiters, Jira, Confluence, Microsoft Teams, Slack',
    keyBenefits: '1. Streamlined Submission Process\nSimplifies how job needs are requested.\n2. Auto-Route for Approvals\nSends requests to the right stakeholders.\n3. Standardized Intake Format\nEnsures consistency in role requirements.\n4. Faster Hiring Timelines\nReduces delays in recruitment kick-off.'
  },
  {
    id: '23',
    title: 'Contact Change',
    description: 'Agentic AI enables employees to easily update their contact details, such as phone numbers or personal email addresses, through a guided, error-proof process. Changes are automatically synced across HR systems to maintain data accuracy, reduce administrative overhead, and ensure reliable communication channels.',
    domain: 'HR',
    integrations: 'Workday, SAP SuccessFactors, BambooHR, ADP, Oracle HCM, ServiceNow, Microsoft Teams, Slack',
    keyBenefits: '1. Quick Info Updates\nAllows fast edits to phone/email.\n2. System-Wide Syncing\nPropagates changes across platforms.\n3. Reduces Manual Errors\nPrevents outdated contact data.\n4. Improves HR Accuracy\nKeeps employee records reliable.'
  },
  {
    id: '24',
    title: 'Address Change',
    description: 'Agentic AI supports employees in submitting address changes with minimal effort. It validates address formats, routes requests for necessary verification, and updates all downstream systems, such as payroll and benefits platforms—helping organizations stay compliant and employees stay informed.',
    domain: 'HR',
    integrations: 'Workday, SAP SuccessFactors, BambooHR, ADP, Oracle HCM, USPS Address Verification API, ServiceNow, Microsoft Teams, Slack',
    keyBenefits: '1. Guided Update Process\nWalks users through address changes.\n2. Auto-Sync to Payroll\nEnsures records align for tax/forms.\n3. Confirmation Notifications\nSends alerts once change is processed.\n4. Reduces Compliance Risk\nKeeps employee data up to date.'
  },
  {
    id: '25',
    title: 'Training Management',
    description: 'Agentic AI helps monitor, notify, and guide employees on overdue training modules. It provides proactive reminders, surfaces relevant content, and enables direct access to learning platforms to ensure compliance and growth.',
    domain: 'HR',
    integrations: 'Workday Learning, SAP SuccessFactors Learning, Cornerstone OnDemand, Udemy Business, LinkedIn Learning, Docebo, Microsoft Teams, Zoom',
    keyBenefits: '1. Automated Reminders\nNotifies employees of trainings due soon.\n2. One-Click Course Access\nLinks directly to training portals.\n3. Compliance Visibility\nKeeps managers aware of training gaps.\n4. Reduces Admin Workload\nMinimizes follow-ups by HR teams.'
  },
  {
    id: '26',
    title: 'Employee Recognition',
    description: 'Agentic AI makes it easy for employees and managers to recognize peers through guided workflows, nomination prompts, and integrated submission to recognition programs or portals.',
    domain: 'HR',
    integrations: 'Bonusly, Workday, Achievers, Kudos, Slack, Microsoft Teams, BambooHR, Nectar',
    keyBenefits: '1. Encourages Positive Culture \nPromotes peer appreciation.\n2. Simplifies Recognition Submissions Streamlines nomination processes.\n3. Boosts Engagement  Reinforces value-driven behavior.\n4. Integrated With HR Systems  Automatically records recognitions.'
  },
  {
    id: '27',
    title: 'Job Referral',
    description: 'Enable employees to seamlessly refer candidates for open roles by guiding them through the submission process, validating eligibility, and tracking referral status. The AI ensures referred candidates are properly routed to the recruiting team, while keeping employees informed on progress and potential referral bonuses—reducing friction and improving internal talent sourcing.',
    domain: 'HR',
    integrations: 'Workday, Greenhouse, Lever, SmartRecruiters, iCIMS, Slack, Microsoft Teams, Outlook',
    keyBenefits: '1. Easy Referral Submission Simplifies sharing candidate info.\n2. Highlights Open Roles  Matches referrals to current openings.\n3. Improves Candidate Tracking  Keeps referrals visible to recruiters.\n4. Boosts Talent Pipeline  Encourages employee-driven hiring.'
  },
  {
    id: '28',
    title: 'Add Dependent',
    description: 'Assist employees in adding eligible dependents to their health and insurance benefits by collecting necessary personal information and documentation, validating eligibility, and submitting the data to the appropriate benefits platform. The AI ensures timely updates and provides reminders for key deadlines, helping employees maintain accurate and up-to-date benefit coverage.',
    domain: 'HR',
    integrations: 'Workday, SAP SuccessFactors, ADP, BambooHR, Oracle HCM, ServiceNow',
    keyBenefits: '1. Guided Enrollment Steps Helps complete forms correctly.\n\n2. Eligibility Validation  Ensures dependent requirements are met.\n\n3. System-Wide Sync  Updates across benefits platforms.\n\n4. Reduces Errors  Minimizes incorrect or missing data.'
  },
  {
    id: '29',
    title: 'Health Coverage Viewing',
    description: 'Allow employees to easily access their current health coverage details, including medical, dental, and vision plans, premiums, covered services, and out-of-pocket maximums. The AI retrieves up-to-date information from benefits systems, offers helpful explanations of plan components, and can guide users in comparing available options during open enrollment or life events.',
    domain: 'HR',
    integrations: 'Workday, ADP, SAP SuccessFactors, Oracle HCM, Aetna, UnitedHealthcare, Blue Cross Blue Shield APIs',
    keyBenefits: '1. Quick Access to Details  View current plan information easily.\n\n2. Real-Time Sync  Reflects up-to-date benefits data.\n\n3. Supports Decision-Making  Helps in evaluating benefits use.\n\n4. Reduces HR Inquiries  Minimizes help desk questions.'
  },
  {
    id: '30',
    title: 'Retirement Plans',
    description: 'Provide employees with real-time access to their retirement plan details, including 401(k) or pension balances, contribution rates, employer match info, and investment options. The AI can answer questions about eligibility, vesting schedules, or rollover processes, and offer educational resources to help employees optimize their retirement planning strategy.',
    domain: 'HR',
    integrations: 'Workday, ADP, Fidelity, Vanguard, Empower, Principal, SAP SuccessFactors',
    keyBenefits: '1. Plan Summary Access  Easily view contributions and vesting.\n\n2. Enrollment Support  Guides users through sign-up.\n\n3. Educational Resources  Links to retirement FAQs and tools.\n\n4. Reduces Manual Help  Frees up HR for complex needs.'
  },
  {
    id: '31',
    title: 'Company Stock',
    description: 'Allow employees to view and manage their company stock options or equity plans, including grant amounts, vesting schedules, current market value, and exercise status. The AI can explain stock plan terms, notify users of upcoming vesting milestones or trading windows, and guide them through the process of exercising shares or making investment decisions.',
    domain: 'HR',
    integrations: 'Workday, Morgan Stanley at Work, Fidelity Stock Plan Services, E*TRADE Corporate Services, Carta',
    keyBenefits: '1. Self-Serve Stock Info  Quickly access equity data.\n\n2. Vesting Visibility – View schedules and milestones.\n\n3. Transaction Guidance – Support for exercising options.\n\n4. Enhances Financial Awareness – Empowers informed decision-making.'
  },
  {
    id: '32',
    title: 'Commuter Benefits Management',
    description: 'Support employees in enrolling in or managing commuter benefits like public transit passes, parking allowances, or ride-sharing credits. The AI can validate eligibility, provide updates on remaining balances, notify users of changes in coverage, and process updates during open enrollment or when an employee relocates or changes their commuting habits.',
    domain: 'HR',
    integrations: 'Workday, ADP, WageWorks, Edenred, Navia, SAP SuccessFactors',
    keyBenefits: '1. Streamlined Benefits Access\nEasily access and manage commuter benefit information.\n2. Policy-Adherent Automation\nEnsures benefit usage aligns with company policies.\n3. Real-Time Updates\nReflects changes instantly across systems.\n4. Lower HR Workload\nReduces manual handling of commuter benefits.'
  },
  {
    id: '33',
    title: 'Direct Deposit Notifications',
    description: 'Automatically notify employees of changes or issues related to their direct deposit setup. The AI verifies bank account details, confirms transaction success, and flags any discrepancies or delays. It also guides users through the secure process of updating their banking information in HR systems, ensuring paychecks are delivered accurately and on time.',
    domain: 'HR',
    integrations: 'ADP, Workday, SAP SuccessFactors, Oracle HCM, UKG, Plaid, Slack, Microsoft Teams',
    keyBenefits: '1. Immediate Payment Alerts\nNotifies employees instantly of payroll transactions.\n2. Secure Financial Updates\nEnsures confidential and accurate information delivery.\n3. System Integration Ready\nConnects directly with payroll and HR systems.\n4. Employee Assurance\nOffers peace of mind with payment confirmation.'
  },
  {
    id: '34',
    title: 'Update Employee Entitlements',
    description: 'Enable HR teams or managers to easily update employee entitlements such as paid time off balances, bonuses, or special allowances. The AI can ensure changes are properly authorized, tracked, and communicated to relevant systems and stakeholders. It can also generate summaries of historical entitlements for audits or employee queries.',
    domain: 'HR',
    integrations: 'Workday, SAP SuccessFactors, BambooHR, ADP, Oracle HCM, ServiceNow',
    keyBenefits: '1. Accurate Entitlement Tracking\nMaintains up-to-date records of employee rights.\n2. Faster Update Processing\nSpeeds up adjustments to benefits or roles.\n3. Policy-Based Changes\nEnsures updates comply with HR guidelines.\n4. Less Manual Intervention\nMinimizes admin involvement in entitlement changes.'
  },
  {
    id: '35',
    title: 'Bonus Letter Creation & Management',
    description: 'Automate the generation, review, and delivery of personalized employee bonus letters based on HR data and compensation cycles. The AI ensures consistency in tone, accuracy in bonus calculations, and proper routing for approvals. Employees can access their letters securely, and managers can track status or request changes if needed.',
    domain: 'HR',
    integrations: 'Workday, SAP SuccessFactors, DocuSign, Adobe Acrobat Sign, Microsoft Word, Google Docs, BambooHR',
    keyBenefits: '1. Automated Letter Generation\nQuickly produces consistent bonus letters.\n2. Secure Distribution Process\nTracks and safeguards document delivery.\n3. Customizable Templates\nAllows easy formatting for different audiences.\n4. Supports HR Cycles\nFacilitates timely completion of bonus events.'
  },
  {
    id: '36',
    title: 'Draft Prospective Customer Email',
    description: 'Automatically generate personalized outreach emails tailored to each prospective customer based on their industry, role, digital behavior, and prior interactions. By integrating CRM data, company news, and historical sales messaging, crafting compelling messages that align with the customer's pain points and buying stage. This eliminates manual writing tasks for sales reps, ensures consistency across teams, and helps scale outbound efforts.',
    domain: 'Sales',
    integrations: 'Salesforce, HubSpot, Outreach, Salesloft, Gmail, Outlook, LinkedIn Sales Navigator',
    keyBenefits: '1. Faster Outreach Creation: Reduces time spent on crafting emails.\n2. Tailored Messaging: Aligns tone and content with buyer stage.\n3. Scalable Engagement: Enables reps to engage more prospects.\n4. Consistency & Quality: Ensures professionalism and relevance.'
  },
  {
    id: '37',
    title: 'Recap Customer Meetings',
    description: 'Automatically summarizes customer meeting transcripts, highlighting key discussion points, decisions made, action items, and follow-ups. This ensures accurate documentation, improves internal alignment, and helps sales teams stay on top of customer needs.',
    domain: 'Sales',
    integrations: 'Zoom, Microsoft Teams, Google Meet, Gong, Chorus.ai, Fireflies.ai, Salesforce, Notion',
    keyBenefits: '1. Saves Post-Meeting Time: Eliminates manual note-taking.\n2. Improved Follow-Through: Tracks action items and owners.\n3. Enhanced Collaboration: Enables cross-functional visibility.\n4. Customer-Centric Memory: Builds consistent engagement history.'
  },
  {
    id: '38',
    title: 'Compare products',
    description: 'Compares products based on features, pricing, and customer fit by analyzing internal data and market benchmarks. It enables quick, data-driven comparisons to better position offerings in competitive sales situations.',
    domain: 'Sales',
    integrations: 'Salesforce, Highspot, Seismic, Guru, SharePoint, Confluence, Productboard, Notion',
    keyBenefits: '1. Informed Selling: Equips reps with clear product advantages.\n2. Customized Comparisons: Tailored to specific buyer needs.\n3. Accelerates Decisions: Reduces buyer hesitation.\n4. Competitive Edge: Positions solution effectively.'
  },
  {
    id: '39',
    title: 'Prepare for a customer presentation',
    description: 'Generates customized customer presentations by pulling in relevant case studies, product features, usage data, and customer pain points, helping sales reps tailor decks that resonate and drive impact.',
    domain: 'Sales',
    integrations: 'Salesforce, PowerPoint, Google Slides, Highspot, Seismic, Notion, Canva',
    keyBenefits: '1. Tailored Content: Reflects customer-specific context.\n2. Presentation Ready: Reduces prep time.\n3. Professional Decks: Consistent branding and structure.\n4. Improves Delivery: Enables better storytelling.'
  },
  {
    id: '40',
    title: 'Draft relevant outbound messages for Linkedin',
    description: 'Creates personalized LinkedIn outreach messages using CRM data, prospect profiles, recent activity, and engagement trends. It helps reps connect with prospects more effectively and improve social selling success.',
    domain: 'Sales',
    integrations: 'LinkedIn Sales Navigator, Salesforce, Outreach, HubSpot, ChatGPT API, Crystal Knows',
    keyBenefits: '1. Hyper-Personalized Outreach: Higher connection rates.\n2. Saves Time: Quick message generation.\n3. Omnichannel Engagement: Consistent with email cadences.\n4. Smart Targeting: Relevant and timely outreach.'
  },
  {
    id: '41',
    title: 'New Account Summarization',
    description: 'Reviews CRM data, firmographics, engagement history, and recent updates to automatically generate concise summaries of new customer accounts. This equips sales reps with a quick yet comprehensive understanding of each account\'s potential, helping tailor messaging and outreach strategies from the very first interaction.',
    domain: 'Sales',
    integrations: 'Salesforce, LinkedIn Sales Navigator, Clearbit, ZoomInfo, Crunchbase, 6sense',
    keyBenefits: '1. Quick Account Insights: Reduces ramp-up time.\n2. Unified View: Combines multiple data points.\n3. Better Planning: Helps prioritize early engagement.\n4. Faster Onboarding: Improves seller productivity.'
  },
  {
    id: '42',
    title: 'Identify High churn risk customers',
    description: 'Continuously monitors customer activity, sentiment from support interactions, usage metrics, and renewal signals to identify accounts with high churn risk. It alerts account managers proactively, recommending personalized outreach and retention strategies to address potential issues before they escalate.',
    domain: 'Sales',
    integrations: 'Salesforce, Gainsight, Totango, HubSpot, Zendesk, Snowflake, Looker, Tableau',
    keyBenefits: '1. Proactive Retention: Intervene before churn occurs.\n2. Data-Driven Insights: Flags based on real behavior.\n3. Prioritized Attention: Focuses reps on high-risk accounts.\n4. Improved Forecasting: Enhances renewal accuracy.'
  },
  {
    id: '43',
    title: 'Target Account Research',
    description: 'Automates account research by gathering and synthesizing company news, executive changes, financials, hiring trends, and social sentiment. It delivers sales-ready briefs that help reps quickly understand an account\'s current landscape, pain points, and buying signals—saving hours of manual research.',
    domain: 'Sales',
    integrations: 'LinkedIn Sales Navigator, ZoomInfo, Clearbit, Crunchbase, Owler, Similarweb, 6sense',
    keyBenefits: '1. Deep Account Context: Informed conversations.\n2. Automated Research: Saves rep time.\n3. Real-Time Updates: Fresh insights always.\n4. Sales Strategy Alignment: Improves targeting precision.'
  },
  {
    id: '44',
    title: 'Prep new use Case for prospects',
    description: 'Analyzes industry trends, prospect pain points, and historical customer success data to recommend relevant use cases. It generates clear narratives that connect the prospect\'s challenges to proven solutions, helping reps present tailored, compelling value propositions during outreach and meetings.',
    domain: 'Sales',
    integrations: 'Salesforce, Notion, Highspot, Seismic, Productboard, Confluence, Slack',
    keyBenefits: '1. Custom Fit: Aligns use cases to prospect needs.\n2. Educates Prospects: Clarifies product value.\n3. Speeds up Conversations: Reduces selling cycle.\n4. Boosts Win Rate: Better buyer alignment.'
  },
  {
    id: '45',
    title: 'Find Sales opportunities that mentions competitors',
    description: 'Scans CRM notes, sales call transcripts, emails, and chats for competitor mentions, highlighting areas where your offering can differentiate. It surfaces these insights as competitive sales opportunities, enabling reps to act quickly and position your solution more strategically.',
    domain: 'Sales',
    integrations: 'Gong, Salesforce, LinkedIn Sales Navigator, Slack, Crayon, Owler',
    keyBenefits: '1. Competitive Awareness: Alerts reps to threats.\n2. Smart Positioning: Shapes narrative early.\n3. Focused Strategy: Prioritize competitive deals.\n4. Win Back Deals: Offer stronger alternatives.'
  },
  {
    id: '46',
    title: 'Summarize the status of a customer',
    description: 'Compiles a holistic view of each customer by aggregating deal stages, open tickets, meeting notes, renewal data, and recent interactions. It creates clear, structured summaries that help account managers stay on top of current status, next steps, and potential risks or upsell opportunities.',
    domain: 'Sales',
    integrations: 'Salesforce, HubSpot, Gainsight, Zendesk, Notion, Excel/Sheets, ServiceNow',
    keyBenefits: '1. 360° Visibility: Unified view across functions.\n2. Quick Context: Accelerates decision-making.\n3. Customer Success Sync: Keeps everyone aligned.\n4. Better Forecasting: Informs upsell potential.'
  },
  {
    id: '47',
    title: 'Outline Workshop agenda for Sales',
    description: 'Creates customized workshop agendas based on the prospect\'s business needs, stakeholder profiles, prior engagements, and strategic objectives. It ensures that sessions are productive, aligned with sales goals, and demonstrate value to all attendees; all while reducing planning overhead.',
    domain: 'Sales',
    integrations: 'Salesforce, Google Docs, Notion, Confluence, Microsoft Word, Miro, Figma',
    keyBenefits: '1. Professional Format: Clean, ready-to-send agenda.\n2. Tailored Content: Reflects customer goals.\n3. Facilitates Buy-In: Sets clear expectations.\n4. Streamlines Planning: Reduces prep time.'
  },
  {
    id: '48',
    title: 'Prep for followup call with prospect',
    description: 'Prepares sales representatives for follow-up conversations by summarizing past discussions, current deal status, outstanding questions, and suggested next steps. It offers tailored talking points, relevant collateral, and contextual insights that help drive the conversation forward with confidence.',
    domain: 'Sales',
    integrations: 'Salesforce, Outreach, Gong, LinkedIn Sales Navigator, Notion, Outlook, Gmail',
    keyBenefits: '1. No Reps Left Behind: Always prepared.\n2. Focused Conversations: Based on recent context.\n3. Stronger Engagement: Personalized touchpoints.\n4. Shorter Sales Cycles: Progress faster.'
  }
];
