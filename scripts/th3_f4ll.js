        window.onresize = function() {
            location.reload(); 
        }

        var c0l0r = "#0F0";

        window.onload = function() {
        (function() {           
            var matrix = document.getElementById("matrix");
            var matrix2d = matrix.getContext("2d");
            
            document.getElementById("matrix").style.zIndex = "-1";
            matrix.height = window.innerHeight;
            matrix.width = window.innerWidth;
            
            var matrixCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
            matrixCharset = matrixCharset.split("");
            var matrixFontSize = 12;
            var matrixColumns = matrix.width/matrixFontSize;
            var drops = [];
            
            for (var x = 0; x < matrixColumns; x++) {
                drops[x] = 1;
            }
            
            function drawMatrix() {
                matrix2d.fillStyle = "rgba(0,0,0,0.25)";
                matrix2d.fillRect(0, 0, matrix.width, matrix.height);
                matrix2d.fillStyle = c0l0r;
                matrix2d.font = matrixFontSize + "px arial";
                
                for (var i = 0; i < drops.length; i++) {
                    var text = matrixCharset[Math.floor(Math.random() * matrixCharset.length)];
                    matrix2d.fillText(text, i * matrixFontSize, drops[i] * matrixFontSize);
                    
                    if (drops[i] * matrixFontSize > matrix.height && Math.random() > 0.950) {
                        drops[i] = 0;
                    }
                    drops[i]++;
                    
                }
            }
            
            setInterval(drawMatrix,32);
        })();
        }