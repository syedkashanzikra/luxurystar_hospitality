// middleware/roleMiddleware.js

export const isAdmin = (req, res, next) => {
    if (req.user?.role !== "admin") {
      return res.status(403).json({ message: "Access denied: Admins only" });
    }
    next();
  };
  
  export const isStaff = (req, res, next) => {
    if (req.user?.role !== "staff") {
      return res.status(403).json({ message: "Access denied: Staff only" });
    }
    next();
  };
  
  export const isCustomer = (req, res, next) => {
    if (req.user?.role !== "customer") {
      return res.status(403).json({ message: "Access denied: Customers only" });
    }
    next();
  };
  