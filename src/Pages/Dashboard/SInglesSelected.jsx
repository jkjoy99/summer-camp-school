import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SInglesSelected = ({ select, index,setSelected,selected }) => {
    const { classImage, className, instructorName, _id, email, availableSeat, price } = select

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://summer-camp-school-server-iota-gray.vercel.app/selected/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Selected Class has been deleted.',
                                'success'
                            )
                            const remaining = selected.filter(sel => sel._id !== _id);
                            setSelected(remaining);
                        }
                    })

            }
        })
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <th>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={classImage} alt="" />
                    </div>
                </div>
            </th>
            <td>{className}</td>
            <td>{instructorName}</td>
            <td>{email}</td>
            <td>{availableSeat}</td>
            <td>${price}</td>
            <td>

                <Link to={`/dashboard/payment/${_id}`}><button className="badge badge-outline text-center  btn-outline btn-secondary">Enrolled</button></Link>
            </td>
            <td>
                <button className="badge badge-outline text-center  btn-outline btn-secondary py-8" onClick={() => handleDelete(_id)}><RiDeleteBin5Line className='text-3xl'></RiDeleteBin5Line></button>
            </td>
        </tr>
    );
};

export default SInglesSelected;