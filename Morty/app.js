$(() => {
  const handleDate = data => {
    console.log(data.results[0].name);
    console.log(data);

    const $imgid = data.results[0].image;
    const $img1 = $('<img>').attr('src', $imgid);
    $img1.addClass('imgid');
    $('.card').append($img1);

    const $name = data.results[0].name;
    const $Character = $('<h1>').text(`Name: ${$name}`);
    $Character.addClass('characterName');
    $('.card').append($Character);

    const $gender = data.results[0].gender;
    const $gender1 = $('<h1>').text(`Gender: ${$gender}`);
    $gender1.addClass('gender');
    $('.card').append($gender1);

    const $episode = data.results[0].episode[0];
    const $episode1 = $('<h1>').text(`Found here!:  ${$episode}`);
    $episode1.addClass('episode');
    $('.card').append($episode1);

    const $kind = data.results[0].species;
    const $kind1 = $('<h1>').text(`Species: ${$kind}`);
    $kind1.addClass('kind');
    $('.card').append($kind1);

    const $status = data.results[0].status;
    const $status1 = $('<h1>').text(`Status: ${$status}`);
    $status1.addClass('status');
    $('.card').append($status1);

    const $location = data.results[0].location.name;
    const $location1 = $('<h1>').text(`Location: ${$location}`);
    $location1.addClass('location');
    $('.card').append($location1);

    $('.card').css('border', '3px solid green');
  };

  $('form').on('submit', event => {
    event.preventDefault();
    $('.card').empty();

    const $input = $('.title-query').val();

    // const typeInfo = $(event.currentTarget).val();
    const endpoint = `https://rickandmortyapi.com/api/character/?name=${$input} `;

    $.ajax({ url: endpoint }).then(handleDate);
  });

  $('#myBtn').on('click', event => {
    event.preventDefault();
    $('#myModal').css('display', 'block');
  });

  $('.close').on('click', () => {
    $('#myModal').css('display', 'none');
  });

  $('#rick').on('click', event => {
    event.preventDefault();
    $('#myRick').css('display', 'block');
  });
  $('.close2').on('click', () => {
    $('#myRick').css('display', 'none');
  });

  // event listener for modal here
});
// console.log(endpoint);

//   const titleQuery = 'Rick';

// const $entry = $('<h1>').text(data.Characters);
// $('form').append($entry);
