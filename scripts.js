function submitForm() {
    const form = document.getElementById('paidForm');
    const formData = new FormData(form);
    const data = {};
    
    formData.forEach((value, key) => {
        data[key] = value;
    });

    const emailBody = Object.keys(data).map(key => `${key}: ${data[key]}`).join('\n');

    const email = 'deineemail@domain.de'; // Ersetze dies durch die E-Mail-Adresse, an die der Fragebogen gesendet werden soll
    const subject = 'PAID Fragebogen Antworten';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
}
