// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import StockData from '../../Data/StockData';
// import axios from 'axios';

// const stockfinfor = "flex gap-4 font-light text-primary--color whitespace-nowrap";
// const stockInfTitle = "font-medium text-header--lightcolor whitespace-nowrap";


// const STOCKALL_URL = 'https://bookstorewebdeploy-production.up.railway.app/BookStore/import/all';
// const token = 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uYXV0aGVudGljYXRpb24iLCJzdWIiOiJhZG1pbiIsImV4cCI6MTcxNzQxMzMzOSwiaWF0IjoxNzE3NDAyNTM5LCJzY29wZSI6IlNUQUZGIElNUE9SVF9XT1JLX0ZJTkQgVkVSSUZZX09SREVSIElNUE9SVF9XT1JLX0RFTEVURSBHRVRfQ1VTVE9NRVJfSU5GT1MgSU1QT1JUX1dPUktfVVBEQVRFIElNUE9SVF9XT1JLX0NSRUFURSBHRVRfUEFZTUVOVF9JTkZPUyBDVVNUT01FUiBDQU5DTEVfT1JERVIgR0VUX01ZX0JPT0tTIEdFVF9NWV9QQVlNRU5UUyBDUkVBVEVfT1JERVIgQURNSU4gQURNSU5fTUFOQUdFIn0.LL44jDWSQCY6cktROu_TOb8kw2un-PWfSHyIe8uAXKE';


// export default function StockDetail() {
//     const [stock, setStock] = useState(null);
//     const { id: stockId } = useParams();

//     useEffect(() => {
//         const fetchUserData = async () => {
//             const token = localStorage.getItem('token');

//             if (!token) {
//                 console.error('No token found, please log in.');
//                 return;
//             }

//             try {
//                 const response = await axios.get(STOCKALL_URL, {
//                     headers: {
//                         'Authorization': `Bearer ${token}`
//                     }
//                 });
//                 const result = response.data.result;
//                 const foundOrder = result.find(stock => stock.id.toString() === stockId);
//                 setStock(foundOrder);
//             } catch (error) {
//                 console.error('Error fetching user data:', error);
//                 if (error.response?.data) {
//                     console.error("Error response:", error.response?.data);
//                 }
//             }
//         };

//         fetchUserData();
//     }, [stockId]);

//     if (!stock) {
//         return <div>Loading...</div>;
//     }

//     const {
//         id,
//         createAt,
//         updateAt,
//         createBy,
//         updateBy,
//         importDetailResponse = [],
//         import_total,
//         import_status
//     } = stock;

//     function ShippingStatus(bookstatus) {
//         switch (bookstatus) {
//             case 0: return "Chờ xác nhận";
//             case 1: return "Đã xác nhận";
//             case 2: return "Đang chuẩn bị hàng";
//             case 3: return "Đang giao";
//             case 4: return "Đã giao hàng";
//             default: return "Trạng thái không xác định";
//         }
//     }

//     return (
//         <div className="w-full h-full">
//             <h4 className='h-8 relative -top-1 flex items-start border-b border-border--color text-header--lightcolor pl-4'>Thông tin đơn hàng</h4>
//             <div className="HDNH_maincontent_body1 flex gap-8 py-4 text-primary--color">
//                 <div className="body1_stocknumber w-32 flex justify-center items-center border-2 rounded-xl border-primary--color">{id}</div>
//                 <div className="body1_des">
//                     <div className={stockfinfor}>
//                         <label for="stockdate" className={stockInfTitle}>Ngày tạo hóa đơn: </label>
//                         <div className="stockdate">{new Date(createAt).toLocaleDateString()}</div>
//                     </div>
//                     <div className={stockfinfor}>
//                         <label for="stockstatus" className={stockInfTitle}>Trạng thái: </label>
//                         <div className="stockstatus">{ShippingStatus(import_status)}</div>
//                     </div>
//                     <div className={stockfinfor}>
//                         <label for="staffnumber" className={stockInfTitle}>Nhân viên tạo: </label>
//                         <div className="staffnumber">{createBy}</div>
//                     </div>
//                 </div>
//             </div>

//             {/* <div className="HDNH_maincontent_body2 pl-4">
//                 <h4 className=" font-medium text-primary--color pb-4 pt-1 ">Thông tin nhà cung cấp</h4>
//                 <div className="body2_des">
//                     <div className={stockfinfor}>
//                         <label for="providername" className={stockInfTitle}>Tên nhà cung cấp: </label>
//                         <div className="providername">{providerName}</div>
//                     </div>
//                     <div className={stockfinfor}>
//                         <label for="providerphonenumber" className={stockInfTitle}>Số điện thoại: </label>
//                         <div className="providerphonenumber">{phoneNumber}</div>
//                     </div>
//                     <div className={stockfinfor}>
//                         <label for="provideraddress" className={stockInfTitle}>Địa chỉ: </label>
//                         <div className="provideraddress">{address}</div>
//                     </div>
//                 </div>
//             </div> */}

//             <div className="HDNH_maincontent_body3">
//                 <h4 className="pl-4 font-medium text-primary--color pb-6 pt-6 ">Sản phẩm đã mua</h4>
//                 <div className="body3_container">
//                     <div className="body3_container_content flex w-full  text-header--lightcolor font-medium">
//                         <span className="span1 w-1/4 flex justify-start pl-4">Sản phẩm</span>
//                         <span className="span2 w-1/4 flex justify-center">Đơn giá</span>
//                         <span className="span3 w-1/5 flex justify-center">Số lượng</span>
//                         <span className="span4 w-1/4 flex justify-center">Tổng</span>
//                     </div>
//                     <div className="body3_container_content_detail py-4 flex flex-col overflow-auto h-44  gap-4 text-primary--color">
//                         {importDetailResponse.map((item, index) => (
//                             <div className="HDNH_item flex w-full " key={index}>
//                                 <div className="item_HDNH item_infor  sm:w-1/4  flex gap-8 items-center justify-start ">
//                                     {/* <div className="h-10 w-12 sm:h-10 sm:w-8  rounded-md bg-sky-500 bg-cover bg-no-repeat bg-center "
//                                         style={{ backgroundImage: `url(${item.avatar})` }}></div> */}
//                                     <div className="item_name pl-4">{item.title}</div>
//                                 </div>
//                                 <div className="item_HDNH item_price w-1/4 flex justify-center">{item.import_cost}</div>
//                                 <div className="item_HDNH item_amount w-1/5 flex justify-center">{item.quantity}</div>
//                                 <div className="item_HDNH item_total w-1/4 flex justify-center">{item.total_cost}</div>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="HDNH_maincontent_footer pr-12 sm:pr-32 pt-10 flex flex-col gap-4  text-primary--color">
//                         <div className="HDNH_maincontent_footer_total flex justify-between">
//                             <span className={stockInfTitle}>Tổng tiền hàng</span>
//                             <div className="HDNH_total">{import_total}</div>
//                         </div>
//                         {/* <div className="HDNH_maincontent_footer_discount flex justify-between">
//                             <span className={stockInfTitle}>Giảm giá</span>
//                             <div className="HDNH_discount ">{discount}</div>
//                         </div> */}
//                         {/* <div className="HDNH_maincontent_footer_finaltotal flex justify-between">
//                             <span className=' text-primary--color font-bold'>Tổng thanh toán</span>
//                             <div className="HDNH_finaltotal  text-primary--color font-bold">{totalPrice - discount}</div>
//                         </div> */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import OverlayUpdateStock from "./overlayUpdate";
import UpdateStock from "./UpdateStock";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const stockfinfor = "flex gap-4 font-light text-primary--color whitespace-nowrap";
const stockInfTitle = "font-medium text-header--lightcolor whitespace-nowrap";


const STOCKALL_URL = 'http://167.172.69.8:8010/BookStore/import/all';


export default function StockDetail() {

    const [stock, setStock] = useState(null);
    const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);

    const { id: stockId } = useParams();
    const [showUpdateStock, setshowUpdateStock] = useState(false);
    const [updateOverlayVisible, setUpdateOverlayVisible] = useState(false);
    const DeleteUrl = `http://167.172.69.8:8010/BookStore/import/delete/${stockId}`;
    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                console.error('No token found, please log in.');
                return;
            }

            try {
                const response = await axios.get(STOCKALL_URL, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const result = response.data.result;
                const foundOrder = result.find(stock => stock.id.toString() === stockId);
                setStock(foundOrder);
            } catch (error) {
                console.error('Error fetching user data:', error);
                if (error.response?.data) {
                    console.error("Error response:", error.response?.data);
                }
            }
        };

        fetchUserData();
    }, [stockId]);

    if (!stock) {
        return <div>Loading...</div>;
    }

    const {
        id,
        createAt,
        updateAt,
        createBy,
        updateBy,
        importDetailResponse = [],
        import_total,
        import_status
    } = stock;

    function ShippingStatus(bookstatus) {
    
        if(bookstatus){
            return "Đã xác nhận";
        }
        else{
            return "Chờ xác nhận";
        }
    }
    const openUpdateDialog = () => {
        setshowUpdateStock(true);
        setUpdateOverlayVisible(true); // Hiển thị overlay khi mở dialog
    };
  
    const closeUpdateDialog = () => {
        setshowUpdateStock(false);
        setUpdateOverlayVisible(false); // Ẩn overlay khi đóng dialog
    };


   
  
    const handleDeleteStock = async () => {
        toast.warn(
            <div className='flex flex-col'>
              <p>Bạn có muốn xóa đơn hàng này</p>
               <div className='flex w-full py-1 justify-between'>
               <button onClick={confirmDelete}>Confirm</button>
               <button onClick={() => toast.dismiss()}>Cancel</button>
               </div>
             
            </div>,
            {
              position: "top-center",
              autoClose: false,
              closeOnClick: true,
              draggable: true,
              pauseOnHover: true,
              progress: undefined
            }
          );
        };
      
        const confirmDelete = async () => {
          const token = localStorage.getItem('token');
          try {
            const response = await axios.delete(DeleteUrl, {
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
              }
            });
            console.log('Stock deleted:', response.data);
            // Add any additional logic after successful deletion, e.g., update state or UI
            toast.success("Stock deleted successfully!", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined
            });
          } catch (error) {
            console.error('Error deleting stock:', error);
            if (error.response?.data) {
              console.error("Error response:", error.response.data);
            }
            toast.error("Error deleting stock. Please try again later.", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined
            });
          }
      };
    
      

    return (
        <div className="w-full h-full">
       <div className='flex gap-8 items-center border-b  h-12 w-full border-border--lightcolor'>
        <h4 className='h-8 relative  flex items-start  '>Thông tin đơn hàng</h4>
              {/* <button
                onClick={openUpdateDialog}
                className="btn_addworkshift bg-primary--color text-white--color rounded-full mb-2 mr-8 cursor-pointer hover:opacity-70 border 
                            h-10 w-28 text-xs 
                            sm:w-26 sm:text-sm
                            md:w-26 md:text-sm
                            lg:w-32 lg:text-sm"
                >
                Sửa đơn hàng
              </button> */}
       
              <button
                 onClick={handleDeleteStock}
                className="btn_addworkshift bg-primary--color text-white--color rounded-full mb-2 mr-8 cursor-pointer hover:opacity-70 border 
                            h-10 w-28 text-xs 
                            sm:w-26 sm:text-sm
                            md:w-26 md:text-sm
                            lg:w-32 lg:text-sm"
                >
                Xóa đơn hàng
              </button>
        </div>
            
            <div className="HDNH_maincontent_body1 flex gap-8 py-4 text-primary--color">
                <div className="body1_stocknumber w-32 flex justify-center items-center border-2 rounded-xl border-primary--color">{id}</div>
                <div className="body1_des">
                    <div className={stockfinfor}>
                        <label for="stockdate" className={stockInfTitle}>Ngày tạo hóa đơn: </label>
                        <div className="stockdate">{new Date(createAt).toLocaleDateString()}</div>
                    </div>
                    <div className={stockfinfor}>
                        <label for="stockstatus" className={stockInfTitle}>Trạng thái: </label>
                        <div className="stockstatus">{ShippingStatus(import_status)}</div>
                    </div>
                    <div className={stockfinfor}>
                        <label for="staffnumber" className={stockInfTitle}>Nhân viên tạo: </label>
                        <div className="staffnumber">{createBy}</div>
                    </div>
                </div>
            </div>

            <div className="HDNH_maincontent_body3">
                <h4 className="pl-4 font-medium text-primary--color pb-6 pt-6 ">Sản phẩm đã mua</h4>
                <div className="body3_container">
                    

                    <table className="table-auto w-full text-header--lightcolor font-medium">
                        <thead>
                            <tr>
                                <th className="w-1/3  text-start">Sản phẩm</th>
                                <th className="w-1/4  text-start">Đơn giá</th>
                                <th className="w-1/5  text-start">Số lượng</th>
                                <th className="w-1/4  text-start">Tổng</th>
                            </tr>
                        </thead>
                        <tbody className="text-primary--color">
                            {importDetailResponse.map((item, index) => (
                                <tr key={index} className="HDNH_item">
                                    <td className="item_name text-start">{item.title}</td>
                                    <td className="item_name text-start">{item.import_cost}</td>
                                    <td className="item_price text-start">{item.quantity}</td>
                                    <td className="item_amount text-start">{item.total_cost}</td>
                                </tr>
                            ))}
                        </tbody>
                </table>

                    <div className="HDNH_maincontent_footer pr-12 sm:pr-32 pt-10 flex flex-col gap-4  text-primary--color">
                        <div className="HDNH_maincontent_footer_total flex justify-between">
                            <span className={stockInfTitle}>Tổng tiền hàng</span>
                            <div className="HDNH_total">{import_total}</div>
                        </div>
                       
                    </div>
                </div>
            </div>

            {showUpdateStock && (
            <UpdateStock trigger={setshowUpdateStock} setTrigger={setshowUpdateStock}>
                <OverlayUpdateStock isOpen={updateOverlayVisible} onClose={closeUpdateDialog}>
                  <UpdateSTockInfor stockId={stockId} />
                </OverlayUpdateStock>
                
            </UpdateStock>
        )}
           
        </div>
    );
}


function UpdateSTockInfor({ stockId }) {
    const [stock, setStock] = useState(null);
    const [bookid, setBookId] = useState('');
    const [new_quantity, setQuantity] = useState('');
    const [cost, setCost] = useState(0);


    const url = `http://167.172.69.8:8010/BookStore/import/update/${stockId}`;
  
    useEffect(() => {
      const fetchUserData = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No token found, please log in.');
          return;
        }
  
        try {
          const response = await axios.get(STOCKALL_URL, {
            headers: { 'Authorization': `Bearer ${token}` }
          });
          const result = response.data.result;
          const foundStock = result.find(stock => stock.id === parseInt(stockId, 10));
          console.log(foundStock);
          setStock(foundStock);
          setBookId(foundStock.book_id);
          setQuantity(foundStock.quantity);
          setCost(foundStock.import_cost);
          
        } catch (error) {
          console.error('Error fetching user data:', error);
          if (error.response?.data) {
            console.error("Error response:", error.response?.data);
          }
        }
      };
  
      fetchUserData();
    }, [stockId]);
  
    if (!stock) {
      return <div>Loading...</div>;
    }
  
    const handleUpdateImport = async (event, id) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        const importDetailRequests = {
            book_id: bookid,
            quantity: new_quantity,
            import_cost: cost
        };
        try {
            const response = await axios.patch(url, importDetailRequests, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            console.log('Status changed:', response.data);
            toast.success('Xác nhận thành công!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            // Optionally update the orderlistdata if needed
        } catch (error) {
            console.error('Error changing status:', error);
            if (error.response?.data) {
                console.error("Error response:", error.response.data);
            }
        }
    };
  
   
  
    return (
      <div className="w-full h-full flex ">
        
      </div>
    );
  }
  