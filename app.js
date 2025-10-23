// Feature modules (extend as needed)
const features = [
  { title: 'Custom commands', desc: 'Tailored flows for your community and staff.' },
  { title: 'Moderation suite', desc: 'Auto-moderation, logs, and escalation tools.' },
  { title: 'Tickets & support', desc: 'Structured help channels with SLAs.' },
  { title: 'Economy & roles', desc: 'Engagement loops, role rewards, and shops.' },
];

function renderFeatures() {
  const list = document.getElementById('featureList');
  list.innerHTML = features.map(f => `
    <div class="card">
      <h4>${f.title}</h4>
      <p class="muted">${f.desc}</p>
    </div>
  `).join('');
}

renderFeatures();

// Simple form handler (stub)
const form = document.getElementById('inquiryForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  status.textContent = 'Sending...';

  const data = Object.fromEntries(new FormData(form).entries());

  try {
    // Replace with your endpoint (Express/Firebase/Workers) later:
    // await fetch('/api/inquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });

    // Simulate success
    await new Promise(res => setTimeout(res, 800));
    status.textContent = 'Inquiry sent. I’ll contact you on Discord soon.';
    form.reset();
  } catch (err) {
    status.textContent = 'Failed to send. Please try again.';
  }
});
