let url = new URL(document.URL);
let searchParams = new URLSearchParams(window.location.search);
document.documentElement.lang = searchParams.get("locale");

if(searchParams.get("locale")==null){
url.searchParams.append('locale',navigator.language);
document.location.href = url;
searchParams = new URLSearchParams(window.location.search);
}


