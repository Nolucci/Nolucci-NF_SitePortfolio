let nav = document.getElementById("navbar");

function convert(value, unit)
{
    if(unit === "vh")
    {
        return window.innerHeight * (value / 100);
    }

    return value;
}

function navbarUpdate(scrollChangeValue)
{
    if(document.documentElement.scrollTop >= scrollChangeValue)
    {
        nav.style.backgroundColor = "#3F3F3FFF";
        return;
    }
    nav.style.backgroundColor = "#3F3F3F00";
}

function init()
{
    if(navbar === null)
    {
        return;
    }

    const scrollChange = nav.dataset.scrollChange;
    if(scrollChange === undefined)
    {
        return;
    }

    if(scrollChange === 0)
    {
        nav.style.backgroundColor = "#3F3F3FFF";
        return;
    }

    const unit = nav.dataset.scrollChangeUnit;
    window.onscroll = function()
    {
        navbarUpdate(convert(scrollChange, unit));
    };
    
}

init();