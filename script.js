<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Oobifier</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Oobify Your Text</h1>
        <p>Type in a phrase to see it oobified:</p>
        <input type="text" id="userInput" placeholder="Enter your phrase here">
        <button onclick="oobifyText()">Oobify</button>
        <p id="result"></p>
    </div>

    <script>
        function oobifyText() {
            let phrase = document.getElementById('userInput').value;
            let vowels = 'aeiouAEIOU';
            let result = '';

            for (let char of phrase) {
                if (vowels.includes(char)) {
                    result += (char === char.toUpperCase()) ? 'Oob' : 'oob';
                } else {
                    result += char;
                }
            }

            document.getElementById('result').innerText = `Oobified Phrase: ${result}`;
        }
    </script>
</body>
</html>
