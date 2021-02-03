// first replace the pathname bits
e = window.location.pathname;

// base R URLs
if(e.match("^/packages\/base")){
  e = e.replace(RegExp("/packages/base/versions/(\\d\.)+\\d/topics/"),
                       '/r/base/')
}else{
  e = e.replace('/packages/','/cran/');
  // function manual pages
  e = e.replace(RegExp("versions/(\\d\.)+\\d/topics/"), "man/");
  // package landing pages
  e = e.replace(RegExp("versions/(\\d\.)+\\d"), "");
}

// now replace the hostname
h = window.location.hostname.replace('rdocumentation.org', 'rdrr.io');

// does the pathname end in '/'?
if(e.match(/.*\/$/)){
  // for package pages don't include that
  window.location = window.location.protocol + "//" + h + e;
}else{
  // for man pages we have .html on the end
  window.location = window.location.protocol + "//" + h + e + ".html";
}
