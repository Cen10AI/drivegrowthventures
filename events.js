// Custom event tracking (Vercel Web Analytics — Pro/Plus).
// Injected on every page by .github/workflows/ensure-analytics.yml — do not remove.
window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
document.addEventListener("click", function (e) {
  var a = e.target && e.target.closest ? e.target.closest("a") : null;
  if (!a) return;
  var href = a.getAttribute("href") || "";
  var sec = a.closest("section[id],footer,header,nav");
  var placement = (sec && (sec.id || sec.tagName.toLowerCase())) || "body";
  var social = /(linkedin\.com|lnkd\.in|x\.com|twitter\.com|instagram\.com|tiktok\.com|facebook\.com|youtube\.com)/;
  if (href.indexOf("cen10.ai") !== -1) {
    va("event", { name: "to_cen10", data: { placement: placement, page: location.pathname } });
  } else if (href.indexOf("zirolabs.ai") !== -1) {
    va("event", { name: "to_zirolabs", data: { placement: placement, page: location.pathname } });
  } else if (social.test(href)) {
    var snet = "";
    try { snet = new URL(href).hostname.replace(/^www\./, ""); } catch (err) {}
    va("event", { name: "social_click", data: { network: snet, placement: placement, page: location.pathname } });
  } else if (href.indexOf("mailto:") === 0) {
    va("event", { name: "email_click", data: { placement: placement, page: location.pathname } });
  } else if (/^https?:\/\//.test(href) && href.indexOf(location.hostname) === -1) {
    var domain = "";
    try { domain = new URL(href).hostname.replace(/^www\./, ""); } catch (err) {}
    va("event", { name: "outbound", data: { domain: domain, page: location.pathname } });
  }
});
