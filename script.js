let chart;
const messages = {
    owes: [
        "🥳 {{name}} owes you {{amount}}! Time to celebrate!",
        "💸 Wow! {{name}} needs to pay up {{amount}}! Ring the alarms!",
        "🤑 {{name}}'s tab is {{amount}}! Let the coins clink!",
        "🎉 Party time! {{name}} owes you {{amount}}!",
        "💰 Cash alert! Get your {{amount}} from {{name}}!",
        "🔔 Ding, ding! {{name}} owes {{amount}}. Payday!",
        "📣 Hear ye! {{name}} has a debt of {{amount}} to settle!",
        "🎯 Target acquired: {{amount}} from {{name}}!",
        "🏦 {{name}}'s loan to you amounts to {{amount}}!",
        "💵 It's collecting time! {{name}} owes you {{amount}}!",
        "🔍 Time to collect {{amount}} from {{name}}. No escape!",
        "🚨 Alert: {{name}} should pay back {{amount}} ASAP!",
        "👀 Keep an eye on {{name}}, {{amount}} in the red!",
        "🎰 Jackpot! {{name}} owes you {{amount}}!",
        "🌟 Star collector! You're due {{amount}} from {{name}}!",
        "👛 Time to fill your purse with {{amount}} from {{name}}!",
        "💎 {{name}} owes you a gem worth {{amount}}!",
        "🧾 Bill alert: {{name}} owes you {{amount}}!",
        "💳 Swipe {{name}} for {{amount}} due!",
        "📮 Mail {{name}} a reminder for your {{amount}}!",
        "🍀 Luck's in your favor! {{name}} owes {{amount}}!",
        "🗣️ Announcing a debt of {{amount}} from {{name}}!",
        "🍻 Cheers! {{name}}'s round is worth {{amount}}!",
        "💼 Business with {{name}}: {{amount}} outstanding!",
        "👑 Royalty fees! {{name}} owes you {{amount}}!",
        "📅 Save the date to collect {{amount}} from {{name}}!",
        "⏳ Time's ticking for {{name}} to pay {{amount}}!",
        "🚀 Launch the payment collection from {{name}} of {{amount}}!",
        "🌈 There's a pot of gold ({{amount}}) from {{name}} waiting!",
        "🔮 Predicting a cash flow of {{amount}} from {{name}} soon!",
        "🎈 Pop the news: {{name}} owes you {{amount}}!",
        "🛎️ Service required! {{name}}, please pay {{amount}}!",
        "🎤 Mic drop! {{name}} owes a solid {{amount}}!",
        "🚦 Ready, set, pay! {{name}} owes {{amount}}!",
        "🛒 Shopping fund alert: {{amount}} from {{name}}!",
        "📌 Pinned: {{name}}'s debt of {{amount}}!",
        "🥁 Drumroll, please... {{amount}} coming from {{name}}!",
        "🏁 Race to {{amount}} owed by {{name}} is on!",
        "🔥 Hot news: {{name}} owes you {{amount}}!",
        "💨 Quick! Catch {{name}} for your {{amount}}!",
        "📈 Investments in {{name}} yield {{amount}}!",
        "🏆 Winning! Collect {{amount}} from {{name}}!",
        "⚡ Flash alert: {{name}} owes you {{amount}}!",
        "📥 Inbox: {{amount}} payment request to {{name}}!",
        "🤖 Automated message: {{name}}, please pay {{amount}}!",
        "🎪 Showtime! Time to collect {{amount}} from {{name}}!",
        "👟 Running towards {{amount}} owed by {{name}}!",
        "🏠 Home budget boost: Collect {{amount}} from {{name}}!",
        "🌍 Global finance update: {{name}} owes you {{amount}}!",
        "🎱 Magic number {{amount}} owed by {{name}}!",
        "🐷 Piggy bank filling: {{name}} owes you {{amount}}!"
    ],
    owed: [
        "😓 Oops! Looks like you owe {{name}} {{amount}}. Better pay soon!",
        "🙈 You owe {{name}} {{amount}}. Start saving up!",
        "💔 Break the bank! You owe {{name}} {{amount}}!",
        "🔨 Time to hammer down your debt of {{amount}} to {{name}}!",
        "⚖️ Balance your books! You owe {{name}} {{amount}}!",
        "🧗 Climb out of debt to {{name}}! You owe {{amount}}!",
        "🚢 Set sail to pay {{name}} back {{amount}}!",
        "🌪️ A whirlwind of debt! You owe {{name}} {{amount}}!",
        "⏰ Tick tock, pay back {{name}} {{amount}}!",
        "🎣 Get hooked on repaying {{name}} {{amount}}!",
        "🚨 Red alert! You owe {{name}} {{amount}}!",
        "🍕 Slice your budget to pay {{name}} {{amount}}!",
        "🐍 Don't let debt to {{name}} of {{amount}} slither away!",
        "🏓 Ping pong your payment of {{amount}} to {{name}}!",
        "📚 Time to close the book on your {{amount}} debt to {{name}}!",
        "💣 Defuse your debt bomb! Pay {{name}} {{amount}}!",
        "🎨 Paint yourself out of the debt corner with {{amount}} to {{name}}!",
        "🚀 Blast off your payment of {{amount}} to {{name}}!",
        "👽 It's out of this world! You owe {{name}} {{amount}}!",
        "🌲 Tree mendous debt! You owe {{name}} {{amount}}!",
        "🔑 Unlock your funds to pay {{name}} {{amount}}!",
        "👻 Don't ghost on your debt of {{amount}} to {{name}}!",
        "📦 Unbox your payment strategy for {{amount}} to {{name}}!",
        "🍿 Popcorn and payments: Owe {{name}} {{amount}}!",
        "🥶 Freeze your spending! You owe {{name}} {{amount}}!",
        "🐝 Buzzy about repaying {{name}} {{amount}}!",
        "🌟 Star paying {{name}} back {{amount}}!",
        "🌊 Wave goodbye to debt! Pay {{name}} {{amount}}!",
        "💡 Light up {{name}}'s day by paying back {{amount}}!",
        "🎗️ Tie up your debt to {{name}} with {{amount}}!",
        "🎙️ Broadcast your payment of {{amount}} to {{name}}!",
        "🎪 Circus of debts: Time to pay {{name}} {{amount}}!",
        "🥇 Medal for worst debtor? Pay {{name}} {{amount}} now!",
        "🦶 Foot the bill! You owe {{name}} {{amount}}!",
        "🎯 Hit the target: Pay {{name}} {{amount}}!",
        "🚿 Wash away your debt of {{amount}} to {{name}}!",
        "🛸 UFO sighting: Unidentified Flying Owings to {{name}} of {{amount}}!",
        "🌵 Prickly situation! Settle {{amount}} with {{name}}!",
        "🎈 Deflate your debt by paying {{name}} {{amount}}!",
        "🐥 Time to hatch a plan to pay {{name}} {{amount}}!",
        "🌺 Blossom by clearing {{amount}} debt to {{name}}!",
        "🍦 Melt your debt by paying {{name}} {{amount}}!",
        "🔮 See a future free of debt by paying {{name}} {{amount}}!",
        "🚜 Plow through your debt of {{amount}} to {{name}}!",
        "🏠 Rebuild your financial house by paying {{name}} {{amount}}!",
        "🍂 Fall into good habits and pay {{name}} {{amount}}!",
        "🍫 Sweeten the deal by settling your {{amount}} with {{name}}!",
        "📈 Chart a course to pay off {{amount}} to {{name}}!",
        "🔊 Loud and clear: It's time to pay {{name}} {{amount}}!",
        "🥾 Step up and pay your {{amount}} debt to {{name}}!"
    ],
    even: [
        "😌 All squared up with {{name}}! No debts here.",
        "🎉 Zero balance with {{name}}! Time for peace!",
        "🔄 Full circle! You and {{name}} are even-steven.",
        "✅ Checkmark! You're all settled with {{name}}.",
        "🔄 You and {{name}} just went back to square one: debt-free!",
        "🤝 Handshake-worthy! You owe nothing to {{name}}, and they owe you nothing!",
        "🔗 Unchained! No more financial ties with {{name}}.",
        "🏆 You've achieved balance with {{name}}! Celebrate this financial peace!",
        "🌐 World of zero debt with {{name}}! Feel light and free!",
        "🚦 Green light! Your accounts with {{name}} are perfectly balanced!",
        "⚖️ Perfectly balanced, as all things should be with {{name}}.",
        "🎵 Harmony achieved! No more debts between you and {{name}}.",
        "💧 Drop the last debt! You're clear with {{name}}!",
        "🔍 Nothing to see here! You and {{name}} are squared up!",
        "🎬 And cut! Your debt scene with {{name}} is over.",
        "🏁 Finish line crossed with {{name}}! No debts left!",
        "🌞 Bright day! You've settled all accounts with {{name}}!",
        "🚪 Closed the book on your debts with {{name}}!",
        "🔐 Locked down! Zero balance with {{name}}!",
        "🌿 Fresh start! You and {{name}} are debt-free!",
        "👍 All good with {{name}}! No money matters to mind!",
        "💫 Magical! No more debts with {{name}}!",
        "🛡️ Shielded from debt! All clear with {{name}}!",
        "🏠 Home base! You and {{name}} are financially neutral!",
        "🕊️ Peaceful resolution! No debts with {{name}}!",
        "🚩 Flag of truce! You and {{name}} are debt-free!",
        "🎠 Roundabout back to zero with {{name}}. Enjoy the ride!",
        "⏱️ Timely settlement! All squared with {{name}}!",
        "🚭 Debt-free zone with {{name}}! Breathe easy!",
        "🚨 Alert over! You're even with {{name}}!",
        "🎊 Confetti time! No debts with {{name}}!",
        "🧘 Zen achieved with {{name}}. Financial peace!",
        "🔔 Bells ring for debt freedom with {{name}}!",
        "🎋 Bamboo strong! Financial stability with {{name}}!",
        "🛤️ On track! You're even with {{name}}!",
        "💞 Love the balance! Nothing owed with {{name}}!",
        "🌍 World peace! At least financially with {{name}}!",
        "🎲 Game over! You're even with {{name}}!",
        "🔗 Link disconnected! Debt-free with {{name}}!",
        "⚽ Goal! You've settled up with {{name}}!",
        "🐾 Step lightly! No debts with {{name}}!",
        "🚁 Hovering at zero with {{name}}! No ups or downs!",
        "🎯 Bullseye! Debt target reached with {{name}}!",
        "👓 Clear view! No debts obscuring your relationship with {{name}}!",
        "🎢 Smooth ride back to zero with {{name}}!",
        "🍹 Debt-free like a tropical vacation with {{name}}!",
        "🏛️ Monumental! No debts left with {{name}}!",
        "💡 Bright idea! Settling up with {{name}}!",
        "🌄 New dawn! No more debts with {{name}}!",
        "🚂 Full steam to debt freedom with {{name}}!",
        "📖 End of the chapter! You and {{name}} are even!"
    ]
};

window.onload = function() {
    addNewItem(); // Add the first item row on load
};

function addNewItem() {
    const container = document.getElementById('they-owe-items');
    const itemIndex = container.children.length + 1;
    const newRow = document.createElement('div');
    newRow.className = 'item-row';
    newRow.innerHTML = `<input type="text" placeholder="Item ${itemIndex}" oninput="handleInputChanges()">
                        <input type="number" placeholder="Amount" oninput="handleInputChanges()">`;
    container.appendChild(newRow);
    if (itemIndex === 1) updateChart(); // Initial call to setup or update the chart
}

function handleInputChanges() {
    updateChart();
    document.querySelector('.moment-of-truth').style.display = 'block'; // Show the button
    document.getElementById('resultMessage').style.display = 'none'; // Hide the result message
}

function updateChart() {
    const ctx = document.getElementById('debtChart').getContext('2d');
    const items = document.querySelectorAll('.item-row');
    const labels = Array.from(items).map((item, index) => item.querySelector('input[type=text]').value || `Item ${index + 1}`);
    const data = Array.from(items).map(item => parseFloat(item.querySelector('input[type=number]').value)).filter(value => !isNaN(value) && value !== 0);

    if (data.length === 0) {
        if (chart) chart.destroy();
        return;
    }

    if (chart) {
        chart.destroy();
    }
    chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                // Start from 120 degrees (green) and distribute colors evenly
                backgroundColor: data.map((_, i) => `hsl(${120 + i * 360 / data.length}, 70%, 50%)`),
                borderColor: 'white',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function calculateTotal() {
    const name = document.getElementById('debtorName').value || "Someone";
    const currencySelect = document.getElementById('currency');
    const currency = currencySelect.value;
    let currencySymbol = '$'; // Default to USD

    // Determine the currency symbol
    switch (currency) {
        case 'INR': currencySymbol = '₹'; break;
        case 'EUR': currencySymbol = '€'; break;
        case 'GBP': currencySymbol = '£'; break;
        case 'JPY': currencySymbol = '¥'; break;
        case 'CAD': currencySymbol = 'C$'; break;
        case 'AUD': currencySymbol = 'A$'; break;
        case 'CHF': currencySymbol = 'Fr'; break;
        case 'CNY': currencySymbol = '¥'; break;
        case 'SEK': currencySymbol = 'kr'; break;
        case 'NZD': currencySymbol = 'NZ$'; break;
        case 'SGD': currencySymbol = 'S$'; break;
        case 'HKD': currencySymbol = 'HK$'; break;
        case 'NOK': currencySymbol = 'kr'; break;
        case 'KRW': currencySymbol = '₩'; break;
        case 'MXN': currencySymbol = 'MX$'; break;
        case 'ZAR': currencySymbol = 'R'; break;
        default: currencySymbol = '$'; // Default case
    }

    const items = document.querySelectorAll('.item-row');
    let total = 0;
    items.forEach(item => {
        const amount = parseFloat(item.querySelector('input[type=number]').value);
        if (!isNaN(amount)) {
            total += amount;
        }
    });

    const resultMessage = document.getElementById('resultMessage');
    let messageIndex, messageTemplate, message;
    if (total > 0) {
        messageIndex = Math.floor(Math.random() * messages.owes.length);
        messageTemplate = messages.owes[messageIndex];
        message = messageTemplate.replace('{{name}}', name).replace('{{amount}}', currencySymbol + total.toFixed(2));
        document.body.style.backgroundColor = '#ccffcc'; // Green for credit
        confetti(); // Celebratory confetti
        const confettiSound = document.getElementById('confettiSound');
        confettiSound.play();
        resultMessage.style.color = 'green';
    } else if (total < 0) {
        messageIndex = Math.floor(Math.random() * messages.owed.length);
        messageTemplate = messages.owed[messageIndex];
        message = messageTemplate.replace('{{name}}', name).replace('{{amount}}', currencySymbol + Math.abs(total).toFixed(2));
        document.body.style.backgroundColor = '#ffcccc'; // Red for debit
        document.getElementById('debtSound').play(); // Play the debt notification sound
        document.body.animate([
            { backgroundColor: 'transparent' },
            { backgroundColor: '#ffcccc' }
        ], {
            duration: 1000,
            iterations: 1
        });
        resultMessage.style.color = 'red';
    } else {
        messageIndex = Math.floor(Math.random() * messages.even.length);
        messageTemplate = messages.even[messageIndex];
        message = messageTemplate.replace('{{name}}', name);
        document.body.style.backgroundColor = '#e0f7fa'; // Light blue for balanced
        resultMessage.style.color = 'blue';

        // Play success sound
        document.getElementById('successSound').play();
    }

    resultMessage.innerHTML = message;
    resultMessage.style.display = 'block';
    document.querySelector('.moment-of-truth').style.display = 'none'; // Hide the button after showing results
}
