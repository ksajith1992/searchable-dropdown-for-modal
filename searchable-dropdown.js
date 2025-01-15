(function() {
    // The JavaScript code from your original snippet
    // Make sure to wrap everything in a self-invoking function to avoid conflicts
    
    document.getElementById('dropdownSearch').addEventListener('focus', function() {
        document.querySelector('.dropdown-menu').classList.add('show');
    });

    document.getElementById('dropdownSearchInside').addEventListener('keyup', function() {
        var input = this.value.toLowerCase();
        var items = document.querySelectorAll('#dropdownMenu .dropdown-item');

        items.forEach(function(item) {
            var text = item.textContent.toLowerCase();
            if (text.indexOf(input) === -1) {
                item.style.display = 'none';
            } else {
                item.style.display = '';
            }
        });
    });

    document.querySelectorAll('#dropdownMenu .dropdown-item').forEach(function(item) {
        item.addEventListener('click', function() {
            var selectedText = this.textContent.trim();
            document.getElementById('dropdownSearch').value = selectedText;
            document.getElementById('dropdownSearchInside').value = selectedText;
            document.querySelector('.dropdown-menu').classList.remove('show');
        });
    });

    document.querySelector('.dropdown').addEventListener('click', function(event) {
        event.stopPropagation();
    });

    document.querySelector('.modal').addEventListener('click', function(event) {
        if (!event.target.closest('.dropdown')) {
            document.querySelector('.dropdown-menu').classList.remove('show');
        }
    });
})();
