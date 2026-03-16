const zodiacSigns = [
    "Aries ♈", "Taurus ♉", "Gemini ♊", "Cancer ♋",
    "Leo ♌", "Virgo ♍", "Libra ♎", "Scorpio ♏",
    "Sagittarius ♐", "Capricorn ♑", "Aquarius ♒", "Pisces ♓"
];

const compliments = [
    "You have a magnetic personality.",
    "Your confidence inspires everyone.",
    "You are naturally intelligent.",
    "Your smile brightens the room.",
    "You bring calm in chaos.",
    "You are emotionally strong.",
    "People trust your judgment.",
    "Your creativity is admirable.",
    "You have a kind soul.",
    "You make people feel valued.",
    "Your presence is comforting.",
    "You are full of positive energy.",
    "You handle challenges gracefully.",
    "Your ideas are innovative.",
    "You radiate inner strength.",
    "You have great leadership skills.",
    "You are deeply thoughtful.",
    "You make difficult things simple.",
    "You are honest and genuine.",
    "Your patience is remarkable.",
    "You have a sharp mind.",
    "You uplift people around you.",
    "You stay strong in tough times.",
    "You have a beautiful perspective.",
    "Your determination is inspiring.",
    "You learn from every experience.",
    "You balance logic and emotions well.",
    "You have a unique charm.",
    "You are emotionally mature.",
    "You are more powerful than you know."
];

const victimCardCompliments = [
    "You care more than people deserve.",
    "You always give, rarely receive.",
    "People often misunderstand you.",
    "You carry emotional weight silently.",
    "You put others before yourself.",
    "You’ve been strong for too long.",
    "Your kindness is taken for granted.",
    "You feel deeply but hide it well.",
    "You forgive too easily.",
    "You absorb others’ pain.",
    "You sacrifice your happiness for peace.",
    "You try to fix everyone.",
    "You love without conditions.",
    "You expect little from others.",
    "You stay quiet to avoid conflict.",
    "You get hurt but stay kind.",
    "You deserve more appreciation.",
    "You give second chances often.",
    "You hide your struggles well.",
    "You remain loyal even when hurt."
];

const recommendations = [
    "Trust your instincts today.",
    "Focus on self-growth.",
    "Take a break when needed.",
    "Avoid unnecessary stress.",
    "Speak your truth calmly.",
    "Protect your energy.",
    "Be open to change.",
    "Let go of negativity.",
    "Spend time with loved ones.",
    "Focus on your goals.",
    "Listen more than you speak.",
    "Think before reacting.",
    "Stay consistent with your efforts.",
    "Do something creative today.",
    "Stay patient with progress.",
    "Avoid overthinking.",
    "Balance emotions with logic.",
    "Follow your intuition.",
    "Take small confident steps.",
    "Don’t doubt yourself.",
    "Value your time.",
    "Stay grounded.",
    "Practice gratitude.",
    "Prioritize mental peace.",
    "Don’t rush decisions.",
    "Be mindful of words.",
    "Focus on what you can control.",
    "Trust the process.",
    "Embrace personal change.",
    "Stay true to yourself."
];

const predictions = [
    "Good news is coming soon.",
    "A surprise will make you smile.",
    "Your efforts will pay off.",
    "A meaningful connection is near.",
    "Financial stability is improving.",
    "A positive change is ahead.",
    "Luck is working in your favor.",
    "An old problem will resolve.",
    "Today favors new beginnings.",
    "Someone appreciates you silently.",
    "Opportunities will find you.",
    "Your confidence will grow.",
    "Peace follows a tough phase.",
    "A message will bring clarity.",
    "You’ll gain clarity soon.",
    "Unexpected support will appear.",
    "Your patience will be rewarded.",
    "A happy moment awaits.",
    "Your path is aligning.",
    "Success is closer than it seems."
];


const form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const name = document.querySelector("#name").value
    const surname = document.querySelector("#surname").value
    const date = parseInt(document.querySelector("#date").value)
    const month = parseInt(document.querySelector("#month").value)
    const year = parseInt(document.querySelector("#year").value)


    const text = `Hi ${name} ${surname}, Your Zodiac Sign is : ${zodiacSigns[month - 1]}.
    ${compliments[date - 1]}. ${victimCardCompliments[year % 20]}. ${recommendations[(date * month) % 30]}. ${predictions[(name.length * surname.length) % 20]}`

    const result = document.querySelector("#output")
    result.textContent = text

})

