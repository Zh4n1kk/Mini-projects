type Props = {
  children: React.ReactNode | React.ReactNode[];
}

const WithLayout = ( {children} : Props) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

export default WithLayout;