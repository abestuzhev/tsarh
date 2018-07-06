$(document).ready(function (e) {

    $(".click_doc").click(function (e) {
        e.preventDefault();
        $("#openModal").addClass("active-pdf");
        viewPDF($(this).data("src"));

    });
    $("#closeModal").click(function (e) {
        e.preventDefault();
        $("#openModal").removeClass("active-pdf");
        var canvas = document.getElementById('pdf-view');
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);

    })
});


function viewPDF(url) {
    // If absolute URL from the remote server is provided, configure the CORS
// header on that server.
    var url = url;

    var canvasContainer = document.getElementById("pdf-view");

    canvasContainer.innerHTML="";

// Loaded via <script> tag, create shortcut to access PDF.js exports.
    var pdfjsLib = window['pdfjs-dist/build/pdf'];

// The workerSrc property shall be specified.
    pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';

// Asynchronous download of PDF
    var loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise.then(function(pdf) {
        console.log('PDF loaded');

        // Fetch the first page
        var pageNumber = 1;

        for(var num = 1; num <= pdf.numPages; num++)
            pdf.getPage(num).then(renderPage);
    }, function (reason) {
        // PDF loading error
        console.error(reason);
    });


    function renderPage(page) {
        console.log('Page loaded');

        var scale = 1.5;
        var viewport = page.getViewport(scale);

        // Prepare canvas using PDF page dimensions
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render PDF page into canvas context
        var renderContext = {
            canvasContext: context,
            viewport: viewport
        };

        canvasContainer.appendChild(canvas);
        var renderTask = page.render(renderContext);
        renderTask.then(function () {
            console.log('Page rendered');
        });
    }
}