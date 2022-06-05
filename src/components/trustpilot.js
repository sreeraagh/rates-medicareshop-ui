import React from 'react';
const TrustBox = () => {
  // Create a reference to the <div> element which will represent the TrustBox
  const ref = React.useRef(null);
  React.useEffect(() => {
// If window.Trustpilot is available it means that we need to load the TrustBox from our ref.
// If it's not, it means the script you pasted into <head /> isn't loaded  just yet.
// When it is, it will automatically load the TrustBox.
if (window.Trustpilot) {
  window.Trustpilot.loadFromElement(ref.current, true);
}
  }, []);
  return (
    <div ref={ref} class="trustpilot-widget" data-locale="en-US" data-template-id="54ad5defc6454f065c28af8b" data-businessunit-id="5cee6afbfeac9d0001b63dd4" data-style-height="240px" data-style-width="100%" data-theme="light" data-stars="5" data-review-languages="en" style={{position: "relative"}}><iframe title="Customer reviews powered by Trustpilot" loading="auto" src="https://widget.trustpilot.com/trustboxes/54ad5defc6454f065c28af8b/index.html?templateId=54ad5defc6454f065c28af8b&amp;businessunitId=5cee6afbfeac9d0001b63dd4#locale=en-US&amp;styleHeight=240px&amp;styleWidth=100%25&amp;theme=light&amp;stars=5&amp;reviewLanguages=en" style={{ position: "relative", height: "240px" , width: "100%",  borderStyle: "none", display: "block", overflow: "hidden"}} > </iframe></div>
  );
};
export default TrustBox;