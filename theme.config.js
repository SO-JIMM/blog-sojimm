const YEAR = new Date().getFullYear()

import Image from "next/image"

export default {
  footer: (
    <footer>
      <small>
        <b>
          <time>{YEAR}</time>© SO-JIMM
        </b>
      </small>
      <div>
        <Image
          priority
          src='/images/profile-pic.png'
          alt='profile-pic'
          width={65}
          height={65}
          quality={100}
          style={{
            margin: "0.25rem",
            minWidth: "50px",
            borderRadius: "100%",
          }}
        />
      </div>
      <style jsx>{`
        footer {
          margin-top: 8rem;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
        }
      `}</style>
    </footer>
  ),
}
