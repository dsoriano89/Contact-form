var fsList = document.querySelectorAll('.multiple-field');

        for (i = 0; i < fsList.length; i++) {
            initFieldSet(fsList[i]);

        }

        function initFieldSet(fs) {

            var addButton = document.createElement('button');
            addButton.textContent = 'Add';
            addButton.type = 'button';
            fs.appendChild(addButton);

            var firstInput = fs.querySelector('input');

            addButton.addEventListener('click', function() {
                var addNewDiv = document.createElement('div');
                var addNewInput = document.createElement('input');
                addNewInput.name = firstInput.name;
                addNewInput.type = firstInput.type;

                var deleteButton = document.createElement('button');
                deleteButton.textContent = 'Remove';
                deleteButton.type = 'button';

                addNewDiv.appendChild(addNewInput);
                addNewDiv.appendChild(deleteButton);

                deleteButton.addEventListener('click', function() {
                    addNewDiv.remove()
                })
              fs.insertBefore(addNewDiv, addButton)  
            })
            
        }
