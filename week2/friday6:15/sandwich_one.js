<!DOCTYPE html>
<html lang="en-us">

<head>
    <meta charset="UTF-8">
    <title>My First Object</title>
</head>

<body>

    <h1>Open the console to see the magic!</h1>

    <script>

        function makeSandwich(sandwichType) {

            if (sandwichType == "pbj") {
            }
            var bread = grabBread();
            var peanutButter = grabPeanutButter();
            var jelly = grabJelly();
            spread(bread, peanutButter, jelly);

            var sandwich = slamBreadTogether();
            return sandwich;
        }

        else if (sandwichType == "GelatinousTurkey") {
            var bread = grabBread();
            var turkey = grabTurkey();
            var mayo = grabMayo();
            spread(turkey, mayo);

            var sandwich = slamBreadTogether();
            return sandwich;

        }

        var Haleyssandwich = makeSandwich("pbj");
        var NealsSandwich = makeSandwich("GelatinousTurkey");

    </script>

</body>

</html>