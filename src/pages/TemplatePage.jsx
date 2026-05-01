// filepath: src/pages/TemplatePage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TemplatePage() {
  const navigate = useNavigate();
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const templates = {
    leave: {
      to: '',
      subject: 'Leave Request - [Your Name]',
      body: `Dear [Manager Name],

I would like to request leave from [Start Date] to [End Date] due to [Reason].

During my absence, I will ensure that all my pending tasks are completed or handed over to [Colleague Name].

Thank you for your consideration.

Best regards,
[Your Name]`
    },
    job: {
      to: '',
      subject: 'Job Application - [Position Title]',
      body: `Dear Hiring Manager,

I am writing to express my interest in the [Position Title] position at [Company Name], as advertised on [Where You Found the Job].

With [X] years of experience in [Industry/Field], I have developed strong skills in [Key Skills]. In my previous role at [Previous Company], I [Achievement].

I am excited about the opportunity to contribute to your team and believe my background makes me a strong candidate for this position.

Please find my resume attached for your review. I would welcome the opportunity to discuss how my qualifications align with your needs.

Best regards,
[Your Name]
[Phone Number]
[Email Address]`
    },
    complaint: {
      to: '',
      subject: 'Formal Complaint - [Issue Description]',
      body: `Dear [Recipient Name],

I am writing to formally lodge a complaint regarding [Issue Description].

On [Date], I experienced [Problem Details]. This has caused [Impact/Consequence].

Despite my previous attempts to resolve this matter through [Previous Channels], the issue remains unresolved.

I request that you [Desired Resolution] within [Timeframe].

If this matter is not addressed promptly, I will have no choice but to [Next Steps].

Please confirm receipt of this complaint and provide a timeline for resolution.

Regards,
[Your Name]
[Contact Information]`
    },
    resign: {
      to: '',
      subject: 'Resignation Letter - [Your Name]',
      body: `Dear [Manager Name],

I am writing to formally notify you of my resignation from my position as [Your Position] at [Company Name], effective [Last Working Day - typically 2 weeks from date].

I have greatly appreciated the opportunities for professional growth during my time here. Working with you and the team has been a valuable experience.

During my remaining time, I am committed to ensuring a smooth transition. I am happy to help train my replacement or document my current responsibilities.

Thank you for your understanding and support throughout my tenure.

Best regards,
[Your Name]`
    },
    apology: {
      to: '',
      subject: 'Apology - [Subject]',
      body: `Dear [Recipient Name],

I sincerely apologize for [Issue/Action that required apology]. I understand that my actions/inaction has caused you [Impact].

Looking back, I recognize that I should have [What should have been done differently]. This was never my intention, and I deeply regret any inconvenience or frustration this may have caused.

To prevent this from happening again, I have [Steps taken to ensure it won't repeat].

I value our relationship and hope you can accept my sincere apologies. I am committed to [How you will make things right].

Please let me know if there is anything else I can do to address your concerns.

Sincerely,
[Your Name]`
    },
    meeting: {
      to: '',
      subject: 'Meeting Request - [Topic]',
      body: `Dear [Recipient Name],

I hope this email finds you well. I would like to request a meeting to discuss [Topic/Purpose].

The purpose of this meeting is to:
- [Point 1]
- [Point 2]
- [Point 3]

I am available on the following dates/times:
- [Date/Time Option 1]
- [Date/Time Option 2]
- [Date/Time Option 3]

Please let me know which time works best for you, or feel free to suggest an alternative.

Thank you for your time, and I look forward to our discussion.

Best regards,
[Your Name]`
    }
  };

  const showTemplate = (type) => {
    const template = templates[type];
    setTo(template.to);
    setSubject(template.subject);
    setBody(template.body);
  };

  const sendMail = () => {
    alert(`Sending email to: ${to}\nSubject: ${subject}`);
  };

  const copyText = () => {
    navigator.clipboard.writeText(`To: ${to}\nSubject: ${subject}\n\n${body}`);
    alert('Copied to clipboard!');
  };

  const clearAll = () => {
    setTo('');
    setSubject('');
    setBody('');
  };

  const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      background: darkMode ? '#0f172a' : '#f8fafc',
    },
    sidebar: {
      width: '280px',
      background: darkMode ? '#1e293b' : '#ffffff',
      padding: '1.5rem',
      borderRight: `1px solid ${darkMode ? '#334155' : '#e2e8f0'}`,
    },
    sidebarTitle: {
      color: darkMode ? '#ffffff' : '#1e293b',
      fontSize: '1.5rem',
      fontWeight: 700,
      marginBottom: '0.5rem',
    },
    sidebarSubtitle: {
      color: darkMode ? '#94a3b8' : '#64748b',
      marginBottom: '1.5rem',
    },
    templateItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0.75rem',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      marginBottom: '0.5rem',
      transition: 'all 0.2s',
      background: darkMode ? 'rgba(15, 23, 42, 0.5)' : '#f1f5f9',
    },
    templateIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.25rem',
    },
    templateInfo: {
      flex: 1,
    },
    templateName: {
      color: darkMode ? '#ffffff' : '#1e293b',
      fontWeight: 600,
      fontSize: '0.875rem',
    },
    templateBadge: {
      fontSize: '0.75rem',
      padding: '0.125rem 0.5rem',
      borderRadius: '0.25rem',
    },
    main: {
      flex: 1,
      padding: '1.5rem',
    },
    topbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1.5rem',
    },
    mainTitle: {
      color: darkMode ? '#ffffff' : '#1e293b',
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    darkBtn: {
      padding: '0.5rem 1rem',
      background: darkMode ? '#334155' : '#e2e8f0',
      border: 'none',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      color: darkMode ? '#ffffff' : '#1e293b',
    },
    input: {
      width: '100%',
      padding: '0.875rem 1rem',
      marginBottom: '1rem',
      background: darkMode ? '#1e293b' : '#ffffff',
      border: `1px solid ${darkMode ? '#334155' : '#e2e8f0'}`,
      borderRadius: '0.5rem',
      color: darkMode ? '#ffffff' : '#1e293b',
      fontSize: '1rem',
    },
    editBar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '0.5rem',
    },
    editLabel: {
      color: darkMode ? '#94a3b8' : '#64748b',
    },
    editBtn: {
      padding: '0.375rem 0.75rem',
      background: darkMode ? '#334155' : '#e2e8f0',
      border: 'none',
      borderRadius: '0.375rem',
      cursor: 'pointer',
      color: darkMode ? '#ffffff' : '#1e293b',
    },
    textarea: {
      width: '100%',
      minHeight: '200px',
      padding: '1rem',
      marginBottom: '1rem',
      background: darkMode ? '#1e293b' : '#ffffff',
      border: `1px solid ${darkMode ? '#334155' : '#e2e8f0'}`,
      borderRadius: '0.5rem',
      color: darkMode ? '#ffffff' : '#1e293b',
      fontSize: '1rem',
      fontFamily: 'inherit',
      resize: 'vertical',
    },
    btnRow: {
      display: 'flex',
      gap: '0.75rem',
    },
    actionBtn: {
      padding: '0.75rem 1.5rem',
      background: '#3b82f6',
      border: 'none',
      borderRadius: '0.5rem',
      color: '#ffffff',
      fontWeight: 600,
      cursor: 'pointer',
    },
    clearBtn: {
      padding: '0.75rem 1.5rem',
      background: '#ef4444',
      border: 'none',
      borderRadius: '0.5rem',
      color: '#ffffff',
      fontWeight: 600,
      cursor: 'pointer',
    },
    logoutBtn: {
      position: 'fixed',
      top: '1rem',
      right: '1rem',
      padding: '0.5rem 1rem',
      background: '#ef4444',
      border: 'none',
      borderRadius: '0.5rem',
      color: '#ffffff',
      cursor: 'pointer',
    }
  };

  const templateList = [
    { id: 'leave', icon: '🏖', name: 'Leave request', bg: '#E6F1FB', color: '#0C447C', badge: 'Formal' },
    { id: 'job', icon: '💼', name: 'Job application', bg: '#E6F1FB', color: '#0C447C', badge: 'Formal' },
    { id: 'complaint', icon: '📣', name: 'Complaint mail', bg: '#FAECE7', color: '#712B13', badge: 'Assertive' },
    { id: 'resign', icon: '🚪', name: 'Resignation letter', bg: '#E6F1FB', color: '#0C447C', badge: 'Formal' },
    { id: 'apology', icon: '🙏', name: 'Apology mail', bg: '#EAF3DE', color: '#27500A', badge: 'Friendly' },
    { id: 'meeting', icon: '📅', name: 'Meeting request', bg: '#E6F1FB', color: '#0C447C', badge: 'Formal' },
  ];

  return (
    <div style={styles.container}>
      <button style={styles.logoutBtn} onClick={() => navigate('/')}>
        ← Logout
      </button>
      
      <div style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>Email Templates</h2>
        <p style={styles.sidebarSubtitle}>6 ready-made templates</p>

        {templateList.map((t) => (
          <div 
            key={t.id} 
            style={styles.templateItem}
            onClick={() => showTemplate(t.id)}
          >
            <div style={{...styles.templateIcon, background: t.bg}}>
              {t.icon}
            </div>
            <div style={styles.templateInfo}>
              <div style={styles.templateName}>{t.name}</div>
              <span style={{...styles.templateBadge, background: t.bg, color: t.color}}>
                {t.badge}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.main}>
        <div style={styles.topbar}>
          <span style={styles.mainTitle}>Compose Email</span>
          <button style={styles.darkBtn} onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        <input
          type="text"
          placeholder="To: email@example.com"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Subject..."
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={styles.input}
        />

        <div style={styles.editBar}>
          <span style={styles.editLabel}>Email Body</span>
          <button style={styles.editBtn} onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? '💾 Save' : '✏️ Edit'}
          </button>
        </div>

        <textarea
          style={styles.textarea}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          readOnly={!isEditing}
        />

        <div style={styles.btnRow}>
          <button style={styles.actionBtn} onClick={sendMail}>
            📧 Send Mail
          </button>
          <button style={styles.actionBtn} onClick={copyText}>
            📋 Copy
          </button>
          <button style={styles.clearBtn} onClick={clearAll}>
            🗑 Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default TemplatePage;