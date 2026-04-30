const templates = {
  leave: {
    to: "manager@company.com",
    subject: "Leave Request",
    body: "Dear Sir,\n\nI want to request leave from [date] to [date].\n\nThank you,\n[Your Name]"
  },
  job: {
    to: "hr@company.com",
    subject: "Job Application",
    body: "Dear Sir,\n\nI want to apply for [Job Title].\nI have [X] years experience.\n\nThank you,\n[Your Name]"
  },
  resign: {
    to: "hr@company.com",
    subject: "Resignation Letter",
    body: "Dear Sir,\n\nI am resigning from [Designation] effective [Date].\n\nThank you,\n[Your Name]"
  },
  complaint: {
    to: "support@company.com",
    subject: "Formal Complaint",
    body: "Dear Sir,\n\nI want to complaint about [issue] which happened on [date].\nKindly resolve this as soon as possible.\n\nThank you,\n[Your Name]"
  },
  apology: {
    to: "",
    subject: "Sincere Apology",
    body: "Dear [Name],\n\nI am sorry for [mistake].\nI take full responsibility.\n\nSorry,\n[Your Name]"
  },
  meeting: {
    to: "",
    subject: "Meeting Request",
    body: "Dear [Name],\n\nI want to schedule a meeting to discuss [topic].\nI am available on [date] at [time].\n\nThank you,\n[Your Name]"
  }
};

// ✅ Template dikhana
function showTemplate(type) {
  document.querySelectorAll('.titem').forEach(el => el.classList.remove('active'));
  event.currentTarget.classList.add('active');
  document.getElementById('to').value = templates[type].to;
  document.getElementById('subject').value = templates[type].subject;
  document.getElementById('body').value = templates[type].body;
  document.getElementById('body').setAttribute('readonly', true);
  document.querySelector('.edit-btn').textContent = '✏️ Edit';
}

// 🌙 Dark mode
function toggleDark() {
  document.body.classList.toggle('dark');
  const btn = document.querySelector('.dark-btn');
  btn.textContent = document.body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
}

// ✏️ Edit toggle
function toggleEdit() {
  const textarea = document.getElementById('body');
  const btn = document.querySelector('.edit-btn');
  if (textarea.hasAttribute('readonly')) {
    textarea.removeAttribute('readonly');
    textarea.style.background = '';
    textarea.focus();
    btn.textContent = '💾 Save';
  } else {
    textarea.setAttribute('readonly', true);
    btn.textContent = '✏️ Edit';
    alert('Changes saved!');
  }
}

// 📧 Send Mail
function sendMail() {
  const to = document.getElementById('to').value;
  const subject = document.getElementById('subject').value;
  const body = document.getElementById('body').value;
  if (to === '') {
    alert('Please enter email address!');
    return;
  }
  const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mailtoLink);
}

// 📋 Copy
function copyText() {
  const text = document.getElementById('body').value;
  navigator.clipboard.writeText(text);
  alert('Copied!');
}

// 🗑 Clear
function clearAll() {
  document.getElementById('to').value = '';
  document.getElementById('subject').value = '';
  document.getElementById('body').value = '';
}