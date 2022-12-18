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
    })
})