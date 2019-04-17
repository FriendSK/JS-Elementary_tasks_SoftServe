(function () {

    module.task4 = function () {

        var inputValue = prompt("Enter numbers").trim();

        function isPalindrome(str) {

            str = str.toString();

            if (!validationData(str)) {

                for (var i = 0; i < str.length; i++) {

                    for (var j = 0; j < str.length; j++) {
                        var row = str.slice(i, j + i + 1);
                        var row2 = row.split('').reverse().join('');

                        if (row == row2 && row.length > 2) return row;
                    };
                };
                return 0;
            } else return validationData(str);
        };

        function validationData(num) {

            var reg = /^\d+$/;

            if (reg.test(num)) {
                return 0;
            } else return {
                status: "failed",
                reason: "Enter only positive numeric natural values"
            }
        };
        console.log(isPalindrome(inputValue));
    };
}());