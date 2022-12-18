function getBase64(file) {
    return new Promise((resolve, reject) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            resolve(reader.result)
        };
        reader.onerror = function (error) {
            console.error('Error: ', error);
            reject(error)
        };
    })
}


jQuery(() => {
    const rootElement = $('#whatsapp_feature')
    rootElement.load('whatsapp.html', () => {
        const $toggleBtn = $('.whatsapp__chatbox__toggle')
        const $chatbox = $('.whatsapp__chatbox')
        const $closeBtn = $('.whatsapp__chatbox--header-close')
        const $actionBtn = $('.whatsapp__chatbox--footer--action')

        $chatbox.on('click', e => e.stopPropagation())

        const openChatbox = () => {
            $chatbox.css('opacity 0')
            $chatbox.css('display', 'block')
            $chatbox.animate({
                opacity: 1,
                top: -25,
            }, 150);
        }

        const closeChatbox = () => {
            $chatbox.animate({
                opacity: 0,
                top: -20,
            }, 150, function () {
                $chatbox.css('display', 'none')
            });
        }

        const onToggleChatbox = () => {
            if ($chatbox.css('display') === 'none') {
                return openChatbox()
            }
            closeChatbox()
        }

        const openWhatsappAPI = () => {
            window.open('https://api.whatsapp.com/send?phone=972523246333', '_blank');
        }

        $toggleBtn.on('click', onToggleChatbox)
        $closeBtn.on('click', closeChatbox)
        $actionBtn.on('click', openWhatsappAPI)




        const $imageInput = $('#image-input')
        const $image = $('.whatsapp__chatbox--header-profile-pic img')
        $imageInput.on('change', async e => {
            $image.attr('src', await getBase64(e.target.files[0]))
        })

        const $nameInput = $('#name-input')
        const $name = $('.whatsapp__chatbox--header-info_name')
        $nameInput.on('change', e => {
            console.log(e.target.value)
            $name.text(e.target.value)
        })

        const $statusInput = $('#status-input')
        const $status = $('.whatsapp__chatbox--header-info_status')
        $statusInput.on('change', e => {
            console.log(e.target.value)
            $status.text(e.target.value)
        })

    })
})