import { useEffect, useState } from "react";
import axios from "axios";

const ReviewsData = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setError([]);
        setReviews([]);
        setLoading(true);
        const response = await axios.get("/wherewego/user/bestReviews");
        setReviews(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchReviews();
  }, []);

  // if (loading) return <div>로딩중 . . . </div>;
  // if (error) return <div>리뷰 데이터를 불러오지 못했습니다.</div>;
  // if (!reviews) return null;

  return [loading, error, reviews];
};

export default ReviewsData;
