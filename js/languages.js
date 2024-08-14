const languages = () => {
  switch (searchParams.get("locale")) {
    case "pt-PT": {
      //Nav//
      document.getElementById("for_you_nav")
        ? (document.getElementById("for_you_nav").innerHTML = "Para Ti")
        : null;
      document.getElementById("business_nav")
        ? (document.getElementById("business_nav").innerHTML = "Para Comercio")
        : null;
      document.getElementById("events_nav")
        ? (document.getElementById("events_nav").innerHTML = "Para Eventos")
        : null;
      document.getElementById("terms_nav")
        ? (document.getElementById("terms_nav").innerHTML =
            "Termos e Condições")
        : null;
      document.getElementById("contacts_nav")
        ? (document.getElementById("contacts_nav").innerHTML = "Contactos")
        : null;
      //Nav//
      //Home//
      document.getElementById("geoTitle")
        ? (document.getElementById("geoTitle").innerHTML =
            "Rede Social Geográfica")
        : null;
      document.getElementById("more_important")
        ? (document.getElementById("more_important").innerHTML =
            "O que é mais importante para ti?")
        : null;
      document.getElementById("more_important_res")
        ? (document.getElementById("more_important_res").innerHTML =
            "Conectares-te e conheceres situações que acontecem longe de ti, ou situações que estão a ocorrer perto de ti?")
        : null;
      document.getElementById("ns_offer")
        ? (document.getElementById("ns_offer").innerHTML =
            "NEARSTUFF oferece a oportunidade melhor de te conectares com o que está ao teu redor!")
        : null;
      document.getElementById("social_part_text")
        ? (document.getElementById("social_part_text").innerHTML =
            "A parte social da rede apresenta posts de amigos e posts públicas de pessoas próximas de ti. Ainda existe a possibilidade partilhar o post de outra pessoa através da tua localização, caso seja interessante. O objetivo é criar um filtro social no qual serão exibidos posts próximos de ti, posts de amigos ou posts interessantes de alguém próximo.")
        : null;
      document.getElementById("social_part_text2")
        ? (document.getElementById("social_part_text2").innerHTML =
            "Como funções básicas, a rede tem a capacidade de compartilhar informações, seja em posts ou por meio de chat privado entre os usuários. Também possui páginas pessoais personalizáveis ​​​​e um sistema de seguidores.")
        : null;
      document.getElementById("business_part_text")
        ? (document.getElementById("business_part_text").innerHTML =
            "A rede social também terá a função de integrar e conectar os utilizadores aos negócios que eles tanto gostam. O objetivo é implementar mecanismos e ferramentas para facilitar as conexões entre os utilizadores e melhorar o ecossistema em que vivemos.")
        : null;
      document.getElementById("business_part_text2")
        ? (document.getElementById("business_part_text2").innerHTML =
            "Esta parte ainda está em estudo e desenvolvimento.")
        : null;
      document.getElementById("events_part_text")
        ? (document.getElementById("events_part_text").innerHTML =
            "A cultura é importante para todos nós, desde os tempos pré-históricos. E como tal, a componente de eventos numa rede social não poderia ser negligenciada. Mais uma vez, o objetivo principal é facilitar o contacto e a comunicação, através de ferramentas sociais.")
        : null;
      document.getElementById("events_part_text2")
        ? (document.getElementById("events_part_text2").innerHTML =
            "Estas ferramentas ainda estão em estudo e desenvolvimento.")
        : null;
      document.getElementById("availableSoon_text")
        ? (document.getElementById("availableSoon_text").innerHTML =
            "BREVEMENTE DISPONIVEL")
        : null;
      document.getElementById("availableSoon_text_stores")
        ? (document.getElementById("availableSoon_text_stores").innerHTML =
            "na Google Playstore e na AppStore")
        : null;

      //Home//
      //Cookies//
      document.getElementById("cookies_notice")
        ? (document.getElementById("cookies_notice").innerHTML =
            "Utilizamos" +
            ' <a href="./cookies/">cookies</a> ' +
            "para que este site funcione corretamente, e para continuarmos a melhora-lo." +
            "<br>Os cookies necessários para o funcionamento do site encontram-se sempre ligados.")
        : null;
      document.getElementById("accept_cookies_btn")
        ? (document.getElementById("accept_cookies_btn").innerHTML = "Aceitar")
        : null;
      document.getElementById("reject_cookies_btn")
        ? (document.getElementById("reject_cookies_btn").innerHTML = "Rejeitar")
        : null;
      //Cookies//
      //CookiesPage//
      document.getElementById("cookie_text1")
        ? (document.getElementById("cookie_text1").innerHTML =
            "Obrigado por visitar nearstuff.com. Esta política de cookies aplica-se a este site. Acreditamos numa política de transparência e, portanto, esta política fornece informações detalhadas sobre como e quando utilizamos cookies.")
        : null;
      document.getElementById("cookie_text2")
        ? (document.getElementById("cookie_text2").innerHTML =
            "Os cookies sao pequenos dados colocados no seu dispositivo que ativa os recursos do NearStuff. Por exemplo, os cookies permitem-nos identificar o seu dispositivo e ajudam-nos a melhorar o nosso serviço.")
        : null;
      document.getElementById("cookie_text3")
        ? (document.getElementById("cookie_text3").innerHTML =
            "O NearStuff utiliza apenas cookies analíticos, ou seja, cookies que nos permitem identificar os dispositivos que entram no site, bem como a sua localização e tempo de interação, apenas para fins estatísticos. Os cookies utilizados estão listados abaixo.")
        : null;
      document.getElementById("table_header1")
        ? (document.getElementById("table_header1").innerHTML = "Origem")
        : null;
      document.getElementById("table_header2")
        ? (document.getElementById("table_header2").innerHTML = "Nome Cookie")
        : null;
      document.getElementById("table_header3")
        ? (document.getElementById("table_header3").innerHTML = "Expiração")
        : null;
      document.getElementById("table_header4")
        ? (document.getElementById("table_header4").innerHTML = "Descrição")
        : null;
      document.getElementById("2years")
        ? (document.getElementById("2years").innerHTML = "2 anos")
        : null;
      document.getElementById("CookieConsentNS_des")
        ? (document.getElementById("CookieConsentNS_des").innerHTML =
            "Utilizado para guardar as preferencias de cookies.")
        : null;
      document.getElementById("Google Analytics1_des")
        ? (document.getElementById("Google Analytics1_des").innerHTML =
            "Utilizado para diferenciar os utilizadores.")
        : null;
      document.getElementById("Google Analytics2_des")
        ? (document.getElementById("Google Analytics2_des").innerHTML =
            "Utilizado para persistir a sessão.")
        : null;
      //CookiesPage//
      //Contacts//
      document.getElementById("contact_title")
        ? (document.getElementById("contact_title").innerHTML = "Contactos")
        : null;
      document.getElementById("contact_text1")
        ? (document.getElementById("contact_text1").innerHTML =
            "Estamos interessados em ouvir suas opiniões e sugestões. Por favor, deixe sua mensagem.")
        : null;
      document.getElementById("name_label_form")
        ? (document.getElementById("name_label_form").innerHTML = "Nome")
        : null;
      document.getElementById("email_label_form")
        ? (document.getElementById("email_label_form").innerHTML = "Email")
        : null;
      document.getElementById("mssg_label_form")
        ? (document.getElementById("mssg_label_form").innerHTML = "Mensagem")
        : null;
      document.getElementById("submitbtn")
        ? (document.getElementById("submitbtn").value = "Enviar")
        : null;
      //Contacts//
      //Terms//
      document.getElementById("terms_title")
        ? (document.getElementById("terms_title").innerHTML =
            "Termos e Condições")
        : null;
      //Terms//
      break;
    }
  }
};
