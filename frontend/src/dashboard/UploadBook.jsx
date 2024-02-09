import React, { useState } from 'react'
// Form requirements from flowbite
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import { Select } from 'flowbite-react';
const UploadBook = () => {

  // Array of Objects for Category
  const bookCategories = [
    "Love",
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-Help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);


  // Function :Selecting the value from the dropdown box 
  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }

  // Function: Book Submission Handling button function
  const handleBookSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const bookTitle = form.bookTitle.value;
    // console.log(bookTitle);
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj = {
      bookTitle, authorName, imageURL, category,bookDescription ,bookPDFURL 
    }
    console.log(bookObj);


    // Conecting to Database to store the data
    fetch("http://localhost:5000/upload-book",
      {
        method: "POST",
        headers:
        {
          "Content-type": "application/json",
        },
        body: JSON.stringify(bookObj)
      }
    )
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        alert("Book Uploaded Successfully!")
        // to refresh the data entered
        form.reset();
      }
      )
  }

  return (
    <div className='px-4 my-12'>
      <h2 className="mb-8 text-3xl font-bold">Upload a Book</h2>

      {/* review Form creation */}
      <form
        onSubmit={handleBookSubmit}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4 ">

        {/* -----------------------------------------------1st Row Starts Here----------------------------------------------------- */}
        <div className='flex gap-8'>
          {/* -------------------------Email Input------------------------------- */}
          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" name='bookTitle' placeholder="Book Name" required type="text" />
          </div>
          {/*------------------Email ends here----------------------------------- */}

          {/*-------------------------AuthorName Input -------------------------------*/}
          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor="auhtorName" value="Author Name" />
            </div>
            <TextInput id="authorName" name='authorName' placeholder="Author Name" required type="text" />
          </div>
          {/*------------------AuthorName ends here-------------------------------- */}

        </div>
        {/*----------------------------------------------- 1st Row ends Here -------------------------------------------------------*/}

        {/* -----------------------------------------------2nd Row Starts Here----------------------------------------------------- */}
        <div className='flex gap-8'>
          {/* -------------------------Book Image URL Input------------------------------- */}
          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput id="imageURL" name='imageURL' placeholder="Book Image URL" required type="text" />
          </div>
          {/*------------------Book Image URL ends here----------------------------------- */}

          {/*-------------------------Category Input -------------------------------*/}
          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor='inputState' value="Book Category" />
            </div>
            <Select id='inputState' name='categoryName' className='w-full rounded ' value={selectedBookCategory}
              onChange={handleChangeSelectedValue}>
              {/* Mapping the cateogries */}
              {
                bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
              }
            </Select>
          </div>
          {/*------------------Category ends here-------------------------------- */}

        </div>
        {/*----------------------------------------------- 2nd Row ends Here -------------------------------------------------------*/}


        {/*----------------------------------------------- 3rd Row Starts Here -------------------------------------------------------*/}
        <div className='mb-2 block'>
          {/* -------------------------Book Description Input------------------------------- */}
          <Label htmlFor='bookDescription' value="Book Description" />

          <div>
            <Textarea id='bookDescription' name='bookDescription' placeholder='Write your book description' required className='mt-3 w-full' rows={6} />
          </div>
          {/* --------------------------End of Book Description--------------------------- */}
        </div>
        {/*----------------------------------------------- 3rd Row ends Here -------------------------------------------------------*/}

        {/*----------------------------------------------- 4th Row starts Here -------------------------------------------------------*/}
        <div className='mb-2 block'>
          {/*---------------------- Book pdf Link---------------------------------- */}
          <Label htmlFor='bookPDFURL' value='Book PDF URL' />

          <div>
            <TextInput id='bookPDFURL' name='bookPDFURL' placeholder='book pdf url' required className='mt-3' type='bookPDFURL' />
          </div>
          {/*----------------------- End of Book pdf link---------------------- */}
        </div>
        {/*----------------------------------------------- 4th Row ends Here -------------------------------------------------------*/}

        {/*----------------------------------------------- 5th Row Starts Here -------------------------------------------------------*/}
        <Button type='submit' className='mt-5'>
          Upload Book
        </Button>
        {/*----------------------------------------------- 5th Row ends Here -------------------------------------------------------*/}

      </form>

    </div>
  )
}

export default UploadBook